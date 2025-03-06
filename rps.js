// Computer random generated choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}



// User choice prompt
function getHumanChoice() {
    let choice = prompt("Please choose between rock, paper or scissors.").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return `${choice}`;
    } else {
        alert("Wrong input, please choose between rock, paper or scissors.")
        return getHumanChoice();
    }
}




// Play again prompt
function playAgain() {
    let replay = prompt("Do you want to play again?").toUpperCase();
    if (replay === "Y") {
    playGame();
    } else if (replay === "N") {
    alert("Thank you for playing!");
    } else {
    alert("Invalid choice, please type 'Y' if you wish to play again or 'N' if you wish to exit the game.");
    playAgain();
    }
}




// Game
function playGame() {
    let humanScore = 0;
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

    // Initialize game
    console.log("Round 1");
    playRound(getHumanChoice(), getComputerChoice());
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

    // Declare final score
    if (humanScore > computerScore) {
        console.log("You win the game!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    } else {
        console.log("It's a tie!\nFinal Score: " + `${humanScore}` + " You" + " | " + "CPU " + `${computerScore}`);
    };

    // Play again function call
    playAgain();
}

playGame();