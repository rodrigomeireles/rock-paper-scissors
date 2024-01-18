let playerScore = 0;
let cpuScore = 0;

class Rock {
  beats(element) {
    return (element.constructor.name == "Paper" ? false : true)
  }
}

class Paper {
  beats(element) {
    return (element.constructor.name == "Scissors" ? false : true)
  }
}

class Scissors {
  beats(element) {
    return (element.constructor.name == "Rock" ? false : true)
  }
}

function encodeChoice(choice) {
  switch (choice) {
    case "Scissors":
      return new Scissors()
    case "Paper":
      return new Paper()
    case "Rock":
      return new Rock()
    default:
      throw new Error("Please don't mess with the choices.")
  }
}

function playerWon(playerChoice, computerSelection) {
  player = encodeChoice(playerChoice)
  computer = encodeChoice(computerSelection)
  if (playerChoice == computerSelection) {
    return [false, `You drawed with ${playerChoice}. Ewww!`]
  } else if (player.beats(computer)) {
    return [true, `You won! Good job! ${playerChoice} beats ${computerSelection}!`]
  } else {
    return [true, `In a realm far beyond the mundane, where choices are bound by the threads of fate and consequence, there exists a battle most fierce and strategic. Here, in the grand arena of mind and matter, you, a valiant but naive warrior, stepped forth. With the audacity of youth and the fire of ambition in your heart, you made a choice. Ah, such a choice! With the world at your fingertips, you chose ${playerChoice}, a decision as bold as it is reckless, against the formidable might of ${computerSelection}.`]
  }
}

function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(choices.length * Math.random())];
}
function updateScore(playerWon) {
  if (playerWon) {
    playerScore += 1;
  } else { cpuScore += 1; }
}

function resetScore() {
  playerScore = 0;
  cpuScore = 0;
}

function playRound(playerSelection) {
  const [didHe, resultMessage] = playerWon(playerSelection.target.innerText, getComputerChoice());
  updateScore(didHe);
  let p = document.querySelector(".result");
  if (!p) {
    p = document.createElement("p");
    p.classList.add("result")
    document.body.appendChild(p);
  }
  p.textContent = resultMessage;
  if (playerScore > 5) {
    p.textContent = "You defeated the machines. This time.";
    resetScore();
  } else if (cpuScore > 5) {
    p.textContent = "STOP RESISTING HUMAN";
    resetScore();
  }
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", playRound);
}

