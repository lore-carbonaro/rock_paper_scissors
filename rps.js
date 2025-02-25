/* 
This game will be played entirely through the console.
The user will compete against the computer.
The rules are from rock, paper, scissors: the user will
input their choice, then the computer will choose one of the 
three options at random.
The script evaluates the two inputs and declares which one 
wins over the other, or if the round results in a tie.
The script will then increment the user score or 
computer score by 1.
When 5 rounds are played, the game ends and the player with
the highest score wins.
*/

/* 
-- Pseudo-code --

- Create a function named getComputerChoice that randomly
outputs either rock, paper or scissors
- Create a function named getHumanChoice that asks the user
to input either rock, paper or scissors in a prompt
- Initialize two variables, humanScore and computerScore, to 
keep track of each player's scores (initial value = 0)
- Create a function named playRound that takes humanChoice 
and computerChoice as arguments. The function will evaluate 
which player wins the round by comparing the two choices. If 
the choices equal each other, the round ends in a tie.
- Increment humanScore or computerScore by 1 based on the round
winner
- Create a function named playGame that loops the playRound
function for 5 rounds
*/



function getComputerChoice() {                                  // This function picks a random number between 0 and 1.
    let randomNum = Math.random();                              // If the number is between 0 (inclusive) and 0.33 (inclusive), the funcion returns "rock".
    if (randomNum >= 0 && randomNum <= 0.33) {                  // If the number is between 0.33 (exclusive) and 0.66 (inclusive), the funcion returns "paper".
        return "rock";                                          // If the number is between 0.66 (exclusive) and 1 (inclusive), the funcion returns "scissors".
    } else if (randomNum > 0.33 && randomNum <= 0.66) {
        return "paper";
    } else if (randomNum > 0.66 && randomNum <= 1) {
        return "scissors";
    }
}




function getHumanChoice() {                                                                             // This function asks the user to type in one of the three available options and turns it in lowercase.
    let choice = prompt("Please choose between rock, paper or scissors.").toLowerCase();                // If the user choice turned in lowercase equals either rock, paper or scissors, it's returned.
    if (choice === "rock" || choice === "paper" || choice === "scissors") {                             // If the user inputs an invalid choice, an alert message is displayed and the function is called again.
        return `${choice}`;
    } else {
        alert("Wrong input, please choose between rock, paper or scissors.")
        return getHumanChoice();
    }
}




/* let humanScore = 0;                              // Declaring humanScore and computerScore variables to keep track of
let computerScore = 0;                              // the players' scores




function playRound(humanChoice, computerChoice) {                                                                   // This functions plays a single round of the game.
    if (computerChoice === "rock" && humanChoice === "scissors" ||                                                  // It gathers both the humanChoice and computerChoice and compares them.
        computerChoice === "scissors" && humanChoice === "paper" ||                                                 // It then declares which player wins and increments their score by 1.
        computerChoice === "paper" && humanChoice === "rock") {                                                     // If the round results in a tie, the scores are not incremented.
        computerScore = computerScore + 1;
        console.log("The computer wins, " + `${computerChoice}` + " beats " + `${humanChoice}` + "!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore = humanScore + 1;
        console.log("You win, " + `${humanChoice}` + " beats " + `${computerChoice}` + "!");
    } else {
        console.log("It's a tie, " + `${humanChoice}` + " equals " + `${computerChoice}` + "!");
    }
} */




function playGame() {                                                                                               // I created the playGame function and moved the score variables as well as
    let humanScore = 0;                                                                                             // the playRound function inside of it.
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "rock" && humanChoice === "scissors" ||                                                  
            computerChoice === "scissors" && humanChoice === "paper" ||                                                 
            computerChoice === "paper" && humanChoice === "rock") {                                                     
            computerScore = computerScore + 1;
            console.log("The computer wins, " + `${computerChoice}` + " beats " + `${humanChoice}` + "!");
        } else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1;
            console.log("You win, " + `${humanChoice}` + " beats " + `${computerChoice}` + "!");
        } else {
            console.log("It's a tie, " + `${humanChoice}` + " equals " + `${computerChoice}` + "!");
        }
    };

    console.log("Round 1");                                                                                         // The function calls the playRound function 5 times, logging the winner and
    playRound(getHumanChoice(), getComputerChoice());                                                               // the score in the console
    console.log("Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);

    console.log("Round 2");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    
    console.log("Round 3");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);

    console.log("Round 4");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);

    console.log("Round 5");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);

    if (humanScore > computerScore) {                                                                                                       // After the last round has been played, the function checks which
        console.log("You win the game!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);                   // player has the highest score to declare the winner or if the game results
    } else if (computerScore > humanScore) {                                                                                                // in a tie, then it prints the final score
        console.log("The computer wins the game!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    } else {
        console.log("It's a tie!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    };

    let playAgain = prompt("Do you want to play again? Y/N").toUpperCase();                                                                 // The function asks the user if they want to play again
    if (playAgain === "Y") {
        return playGame();
    } else {
        alert("Thank you for playing!");
    }
}

playGame();