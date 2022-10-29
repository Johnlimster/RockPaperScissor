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
    document.getElementById("cScore").innerHTML = "Player: " + cScore;
  }
}

//updates the page
function updatePlayerSelection(playerSelection, result) {
  document.getElementById("result").innerHTML = result;
  document.getElementById("playerSelect").innerHTML = playerSelection;
}

function game(playerSelection) {
  if (pScore < 5 && cScore < 5) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updatePlayerSelection(playerSelection, result);

    scoreCheck(result);
    document.getElementById("compChoice").innerHTML =
      "Computer's Choice: " + computerSelection;
  } else {
    alert("game over");
  }
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
