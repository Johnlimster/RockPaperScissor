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
    return "You won!";
  }
  return "You Lost";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

document.getElementById("compChoice").innerHTML = computerSelection;
document.getElementById("result").innerHTML = playRound(
  playerSelection,
  computerSelection
);
