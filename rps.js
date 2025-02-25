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
When either the computer score or the user score reaches 5, 
the game ends.
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
function until either the humanScore or the computerScore 
reach 5 points
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




function getHumanChoice() {                                                                             // This function asks the user to type in on of the three available options and turns it in lowercase.
    let choice = prompt("Please choose between rock, paper or scissors.").toLowerCase();                // If the user choice turned in lowercase equals either rock, paper or scissors, it's returned.
    if (choice === "rock" || choice === "paper" || choice === "scissors") {                             // If the user inputs an invalid choice, an alert message is displayed and the function is called again.
        return `${choice}`;
    } else {
        alert("Wrong input, please choose between rock, paper or scissors.")
        return getHumanChoice();
    }
}