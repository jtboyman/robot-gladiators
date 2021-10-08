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
          playerMoney = playerMoney - 10;
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
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
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
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      window.alert("You have lost your robot in battle! Game Over! :(");
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
            enemyHealth = 50;
            fight(pickedEnemyName);
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
        window.alert("You've lost your robot in battle.");
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

//start the game when the page loads
startGame();