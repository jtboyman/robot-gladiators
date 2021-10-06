const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to ROBOT GLADIATORS!");

    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

        //check player health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.")
            }

        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        const confirmSkip = window.confirm("Are you sure you'd like to forfeit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
        else {
            window.alert("Please choose a valid option. Try again!");
        }
};

fight();