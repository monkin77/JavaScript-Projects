function getUserChoice(userInput) {
  userInput = userInput.toLowerCase()
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput
  }
  else {
    console.log("Not a valid object")
    
  }
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return "rock"
  }
  else if (randomNumber === 1) {
    return "paper"
  }
  else {
    return "scissors"
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "That's a tie. Puss"
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper"){
      return "You won! Bazingaa. You lost newb"
    }
    else if (computerChoice === "scissors") {
      return "You won! 4 real now eheh"
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You won! Bazingaa. You lost newb"
    }
    if (computerChoice === "rock"){
      return "You won! 4 real now eheh"
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock"){
      return "You won! Bazingaa. You lost newb"
    }
    if (computerChoice === "paper") {
      return "You won! 4 real now eheh"
    }
  }

}	


function playGame(){
  let userChoice = getUserChoice("paper")
  let computerChoice = getComputerChoice()
  console.log(`You threw: ${userChoice}`)
  console.log(`The computer threw: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
