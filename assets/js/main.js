const rpsArray = ["rock", "paper", "scissors"];

//  ################### Get Players Choice #################

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//  ################### Output #########################

const winner = document.querySelector(".outputMiddle");
const playerOutput = document.querySelector(".outputLeft");
const computerOutput = document.querySelector(".outputRight");
const count = document.querySelector(".count");
const playerCount = document.querySelector(".playerCount");
const computerCount = document.querySelector(".computerCount");
const heading = document.querySelector("h1");

// #################### Function Reset, RandomNumber, ComputerChoice #######################

function reset() {
    countPlayer = 0;
    countComputer = 0;
    playerOutput.textContent = "";
    computerOutput.textContent = "";
    winner.textContent = "";
    count.textContent = "";
    heading.style.color = "#f4eee0";
    computerCount.textContent = "";
    playerCount.textContent = "";
    countPlayer = 0;
    countComputer = 0;
    round = 0;
}

function randomNumber() {
    let ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}

function getComputerChoice() {
    const computerChoice = rpsArray[randomNumber()];
    return computerChoice.toUpperCase();
}

// ##################### eventListeners ######################

rock.addEventListener("click", () => {
    rps("rock");
});

paper.addEventListener("click", () => {
    rps("paper");
});

scissors.addEventListener("click", () => {
    rps("scissors");
});

// ################### Game Function #########################

let countPlayer = 0;
let countComputer = 0;
let round = 0;

function rps(choice) {
    let computerChoice = getComputerChoice();
    let playerChoice = choice.toUpperCase();

    if (playerChoice === computerChoice) {
        winner.textContent = "It's a tie.";
        round++;
        playerOutput.textContent = playerChoice;
        computerOutput.textContent = computerChoice;
    } else if ((playerChoice === "ROCK" && computerChoice === "SCISSORS") || (playerChoice === "SCISSORS" && computerChoice === "PAPER") || (playerChoice === "PAPER" && computerChoice === "ROCK")) {
        countPlayer++;
        round++;
        playerCount.textContent = `Your Score ${countPlayer}`;
        computerCount.textContent = `Computer Score ${countComputer}`;
        winner.textContent = `You win. ${playerChoice} beats ${computerChoice}`;
        playerOutput.textContent = playerChoice;
        computerOutput.textContent = computerChoice;
    } else if ((computerChoice === "ROCK" && playerChoice === "SCISSORS") || (computerChoice === "SCISSORS" && playerChoice === "PAPER") || (computerChoice === "PAPER" && playerChoice === "ROCK")) {
        countComputer++;
        round++;
        computerCount.textContent = `Computer Score ${countComputer}`;
        playerCount.textContent = `Your Score ${countPlayer}`;
        winner.textContent = `Computer win. ${computerChoice} beats ${playerChoice}`;
        playerOutput.textContent = playerChoice;
        computerOutput.textContent = computerChoice;
    }

    if (countPlayer >= 5) {
        // Fragt den Gewinner ab
        heading.style.color = "red";
        heading.textContent = " You win the game";
        setTimeout(function () {
            heading.textContent = "Rock Paper Scissors";
            reset();
        }, 5000);
        return;
    } else if (countComputer >= 5) {
        heading.style.color = "red";
        heading.textContent = " Computer wins the game";
        setTimeout(function () {
            heading.textContent = "Rock Paper Scissors";
            reset();
        }, 5000);
        return;
    }
}
