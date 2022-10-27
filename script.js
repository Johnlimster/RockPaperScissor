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

function updatePlayerSelection(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  document.getElementById("playerChoice").innerHTML = playerSelection;
  document.getElementById("compChoice").innerHTML =
    "Computer's Choice: " + computerSelection;
  document.getElementById("result").innerHTML = result;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => updatePlayerSelection("rock"));
paperButton.addEventListener("click", () => updatePlayerSelection("paper"));
scissorsButton.addEventListener("click", () =>
  updatePlayerSelection("scissors")
);

//
