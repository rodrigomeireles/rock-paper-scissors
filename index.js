class Rock {
  name = "Rock"
  beats(element) {
    return (element.name == "Paper" ? false : true)
  }
}
class Paper {
  name = "Paper"
  beats(element) {
    return (element.name == "Scissors" ? false : true)
  }
}


class Scissors {
  name = "Scissors"
  beats(element) {
    return (element.name == "Rock" ? false : true)
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
      throw new Error("Please pick something from what was offered.")
  }
}

function playerWon(playerChoice, computerSelection) {
  try{ 
    player = encodeChoice(playerChoice)
  } catch (e) {return e}
  computer = encodeChoice(computerSelection)
  if (player.name == computer.name) {
    return `You both drawed with ${playerChoice}. Ewww!`
  } else if (player.beats(computer)) {
    return `You won! Fuck yeah! ${playerChoice} beats ${computerSelection}!`
  } else {
    return `You are inexperienced and made a poor decision. ${playerChoice} will never win against ${computerSelection}`
  }

}


function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"]
  return choices[Math.floor(choices.length * Math.random())]
}

function playRound(playerSelection) {
  playerSelection = playerSelection[0].toUpperCase() +  playerSelection.toLowerCase().slice(1);
  const computerSelection = getComputerChoice();
  return playerWon(playerSelection, computerSelection)
}
  
function game() {
  let game_on = true
  while (game_on) {
    playerChoice = prompt("Pick one of rock/paper/scissors.")
    alert(playRound(playerChoice, ""))
    if (prompt("Contiuar? Pressione Esc para sair.") === null) {
      break;
    }
  }
}

document.
