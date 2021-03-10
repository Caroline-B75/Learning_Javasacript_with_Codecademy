const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    return 'Wrong choice! Try again.';
  }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'There’s a tie, the game ends in a draw.';
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    }
    else {
      return 'You won!';
    }
  }
  else if (userChoice === 'bomb') {
    return 'You won!';
  }
}

const playGame = () => {
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();
