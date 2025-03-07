const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const container = document.querySelector("#container");
let playerScore = 0;
let computerScore = 0;


if (playerScore === 5 || computerScore === 5) {
    document.querySelector("#buttons").remove();
}

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});



function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (computerChoice === "rock" && playerChoice === "scissors" ||                                                  
        computerChoice === "scissors" && playerChoice === "paper" ||                                                 
        computerChoice === "paper" && playerChoice === "rock") {
        result = "The computer wins!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        result = "The player wins!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "It's a tie!"
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    if (playerScore === 5 || computerScore === 5) {
        document.querySelector("#game").remove();
        let winner = `Game over! The final score is: Player ${playerScore} | ${computerScore} Computer`;

        const finalScore = document.createElement("div");
        const playAgain = document.createElement("button");

        finalScore.textContent = winner;
        container.appendChild(finalScore);
        
        playAgain.textContent = "Play again";
        container.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
            location.reload();
        });
    }
}