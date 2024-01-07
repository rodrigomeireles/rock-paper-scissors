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
  if (player == computer) {
    return `You both drawed with ${playerChoice}. Ewww!`
  } else if (player.beats(computer)) {
    return `You won! Good job! ${playerChoice} beats ${computerSelection}!`
  } else {
  return `In a realm far beyond the mundane, where choices are bound by the threads of fate and consequence, there exists a battle most fierce and strategic. Here, in the grand arena of mind and matter, you, a valiant but naive warrior, stepped forth. With the audacity of youth and the fire of ambition in your heart, you made a choice. Ah, such a choice! With the world at your fingertips, you chose ${playerChoice}, a decision as bold as it is reckless, against the formidable might of ${computerSelection}.

Oh, how the ethers trembled at your audacity! The choice of ${playerChoice}, whispered in hushed tones by the winds of destiny, was met with disbelief by the ancient and unseen arbiters of this cosmic game. "A poor decision," they murmured, "borne from inexperience and the folly of hope." For in this grand design, where every move is a note in the symphony of existence, your choice clashed dissonantly against the unyielding force of ${computerSelection}.

The consequences of such a choice were immediate, as palpable as the shifting sands beneath the feet of time itself. The air grew heavy with the scent of inevitability, and the skies darkened with the storm of impending defeat. Your adversary, embodying the unrelenting force of ${computerSelection}, stood unflinching and resolute, a testament to the unforgiving rules of this ancient contest.

As the moment of reckoning drew near, a silence fell over the realm. The stars themselves seemed to hold their breath, awaiting the inevitable outcome. And then, with a clash that echoed through the very fabric of reality, it was done. Your choice of ${playerChoice}, brave but misguided, was utterly undone by the superior strategy of ${computerSelection}.

In the aftermath of this monumental encounter, as the dust settled and the echoes of battle faded into memory, a single truth remained crystal clear: you had been defeated, not just in contest, but in spirit. The defeat was not merely a setback, but a resounding proclamation of your current state - inexperienced, unprepared, and outmatched.

Yet, within this humbling experience lies a glimmer of hope, a lesson to be learned amidst the ruins of defeat. For it is in our most profound failures that we find the seeds of our greatest triumphs. Let this defeat be not an end, but a beginning - a stark reminder of the journey ahead and the growth that awaits.

Embrace this moment, not with despair, but with the resolve to rise anew. For the path of mastery is long and arduous, filled with trials and tribulations that test the very mettle of our souls. Seek guidance, learn from the echoes of the past, and arm yourself with the wisdom of the ages. Only then might you return to this hallowed ground, not as the naive warrior of yore, but as a seasoned champion, ready to rewrite the annals of history with the tale of your redemption.

So go forth, intrepid soul, and let this defeat fuel the fires of your determination. Forge ahead with the knowledge that every choice is a step on the path to glory, and every failure a lesson carved into the stone of eternity. For in this grand, cosmic arena, it is not the victories that define us, but the spirit with which we face our darkest hours and emerge, stronger, wiser, and more determined than ever before. This is not the end of your story, but the beginning of a legend - your legend.`;}
}

function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"]
  return choices[Math.floor(choices.length * Math.random())]
}

function playRound(playerSelection) {
  const resultMessage = playerWon(playerSelection.target.innerText, getComputerChoice());
  let p = document.querySelector("p");
  if (!p) {
    p = document.createElement("p");
    document.body.appendChild(p);
  }
  p.textContent = resultMessage;
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", playRound);
}

