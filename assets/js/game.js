alert("Welcome to Robot Gladiators!")

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    //conditional recursive function call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to proivde a valid answer! Please try again.");
        return fightOrSkip();
    }
  
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;

        //return true if player wants to leave
        return true;
      }
      shop();
    }
  }

let fight = function (enemy) {

    //repeat and execute as long as the enemy robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {

    if (fightOrSkip()); {
        //if true, leave fight by breaking loop
        break;
    }
    
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // generate random damage value based on player's attack power
    let playerDamage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - playerDamage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    // generate random damage value based on enemy's attack power
    let enemyDamage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      window.alert("You have lost your robot in battle!");
        break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
        };
    };
};
//function to start a new game
let startGame = function() {
    //reset player stats
    playerInfo.reset();

    for(let i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //let player know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            let pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);
            //if player is alive and we're not at the last enemy in the arry
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived Robot Gladiators! You now have a score of " + playerInfo.money + ".");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );

    //change string to integer
    shopOptionPrompt = parseInt(shopOptionPrompt);

    //using switch to carry out action

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;
            
        case 3:
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

// function to set name
var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
      }
  
    console.log("Your robot's name is " + name);
    return name;
  };

let playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }

    }
};

let enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];
//start the game when the page loads
startGame();