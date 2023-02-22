function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function getResult(playerChoice, computerChoice) {
    let score = 0;
  
    if (playerChoice === computerChoice) {
      score = 0;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
      score = 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
      score = 1;
    } else {
      score = -1;
    }
  
    return score;
  }
  
  function showResult(score, playerChoice, computerChoice) {
    const resultContainer = document.querySelector('.resultContainer');
    const hands = document.querySelector('#hands');
    const result = document.querySelector('#result');
    const playerScore = document.getElementById('player-score')
  
    resultContainer.style.display = 'block';
    hands.innerText = `👨🏻 ${playerChoice} vs 💻 ${computerChoice}`;
    playerScore.innerText = getResult(playerChoice, computerChoice)
    
    if (score === 0) {
      result.innerText = `It's a Draw!`;
    } else if (score === 1) {
      result.innerText = `You Win!`;
    } else {
      result.innerText = `You Lose!`;
    }
  }
  
  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice);
    showResult(score, playerChoice, computerChoice);
  }
  
  function playGame() {
    const buttons = document.querySelectorAll('.rpsButton');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        onClickRPS(e.target.value);
      });
    });
  
    const endGameButton = document.querySelector('#endGameButton');
    endGameButton.addEventListener('click', endGame);
  }
  
  function endGame() {
    const hands = document.querySelector('#hands');
    const result = document.querySelector('#result');
    const playerScore = document.getElementById('player-score')
  
    hands.innerText = '';
    result.innerText = '';
    playerScore.innerText = ''
  }
  
  playGame();
  