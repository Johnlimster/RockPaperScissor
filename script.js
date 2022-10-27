function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return true;
  }
  return false;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

document.getElementById("result").innerHTML = playRound(
  playerSelection,
  computerSelection
);
document.getElementById("compChoice").innerHTML = getComputerChoice();
