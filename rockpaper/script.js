document.addEventListener('DOMContentLoaded', function () {
    const totalscore = { 'PlayerScore': 0, 'ComputerScore': 0 };

    function getComputerChoice() {
        const game = ['Rock', 'Paper', 'Scissors'];
        var cc = Math.floor(Math.random() * game.length);
        return game[cc];
    }

    function getResult(PlayerChoice, ComputerChoice) {
        let score;
        if (PlayerChoice == ComputerChoice) {
            score = 0;
        } else if (PlayerChoice == 'Rock' && ComputerChoice == 'Scissors') {
            score = 1;
        } else if (PlayerChoice == 'Paper' && ComputerChoice == 'Rock') {
            score = 1;
        } else if (PlayerChoice == 'Scissors' && ComputerChoice == 'Paper') {
            score = 1;
        } else {
            score = -1;
        }
        return score;
    }

    function showResult(score, PlayerChoice, ComputerChoice) {
        const resultDiv = document.getElementById('result');
        const handsDiv = document.getElementById('hands');
        const PlayerScoreDiv = document.getElementById('player-score');
        if (score == -1) {
            resultDiv.innerText = 'You Lose';
        } else if (score == 0) {
            resultDiv.innerText = 'Its a draw';
        } else {
            resultDiv.innerText = 'You won';
        }
        handsDiv.innerText=`${PlayerChoice} vs ${ComputerChoice} `;
        PlayerScoreDiv.innerText=`Score: ${totalscore.PlayerScore}`
    }

    function onClickRPS(PlayerChoice) {
        const ComputerChoice = getComputerChoice();
        const score = getResult(PlayerChoice, ComputerChoice);
        totalscore['PlayerScore'] += score;
        totalscore['ComputerScore'] += score;
        showResult(score, PlayerChoice, ComputerChoice);
    }

    function playGame() {
        const rpsButtons = document.querySelectorAll('.rpsButton');
        rpsButtons.forEach(butt => {
            butt.onclick = () => onClickRPS(butt.value);
        });
        const end=document.getElementById('endGameButton')
        end.onclick=()=>endgame()
    }
    function endgame()
    {
        totalscore['PlayerScore']=0
        totalscore['ComputerScore']=0
        const resultDiv = document.getElementById('result');
        const handsDiv = document.getElementById('hands');
        const PlayerScoreDiv = document.getElementById('player-score');
        resultDiv.innerText=' '
        handsDiv.innerText=' '
        PlayerScoreDiv.innerText=' '


    }

    playGame(); // Call playGame to set up the event listeners after the DOM has loaded
});
