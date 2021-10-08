alert("Welcome to Robot Gladiators!")
const playerName = prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function (enemyName) {

    //repeat and execute as long as the enemy robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {

    let promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    let confirmSkip = confirm("Are you sure you'd like to quit?");

    //if true, leave fight
    if (confirmSkip) {
        alert(playerName + " has decided to skip this fight. Goodbye!");
          //subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney);
          break;
    }

    //if false, ask question again by running fight() again
    else {
        fight();
    }

}
    
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // generate random damage value based on player's attack power
    let playerDamage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - playerDamage);
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // generate random damage value based on enemy's attack power
    let enemyDamage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - enemyDamage);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      window.alert("You have lost your robot in battle!");
        break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
        };
    };
};

//function to start a new game
let startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            let pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40,60);
            fight(pickedEnemyName);
            //if player is alive and we're not at the last enemy in the arry
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                
                let storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");
                
                //if yes take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
    }

    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to end the game
let endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived Robot Gladiators! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("Game Over :(");
    }

    let playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

let shop = function() {
    //ask player wat they want to do
    let shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //using switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase ealth and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }

            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            //do noting, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force the player to pick a valid option
            shop();
            break;
    }
};
//function to generate a random numeric value
let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

//start the game when the page loads
startGame();