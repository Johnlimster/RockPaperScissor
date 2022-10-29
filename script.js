function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You Tied!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You Won!";
  }
  return "You Lost!";
}

function scoreCheck(result) {
  if (result == "You Won!") {
    pScore++;
    document.getElementById("pScore").innerHTML = "Player: " + pScore;
  } else if (result == "You Lost!") {
    cScore++;
    document.getElementById("cScore").innerHTML = "Computer: " + cScore;
  }
}

function textToEmoji(selection) {
  if (selection == "rock") {
    return "✊";
  } else if (selection == "paper") {
    return "✋";
  } else {
    return "✌";
  }
}

function updateSelection(playerSelection, computerSelection, result) {
  playerSelection = textToEmoji(playerSelection);
  computerSelection = textToEmoji(computerSelection);
  document.getElementById("result").innerHTML = result;
  document.getElementById("playerSelect").innerHTML = playerSelection;
  document.getElementById("compSelect").innerHTML = computerSelection;
}

function game(playerSelection) {
  if (pScore < 5 && cScore < 5) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateSelection(playerSelection, computerSelection, result);
    scoreCheck(result);
  } else alert("game over");
}

let pScore = 0;
let cScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));

//
