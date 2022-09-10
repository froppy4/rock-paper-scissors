//define variables
let winner = "";
let playerChoice = "";
let compChoice = "";
const start = document.querySelector(".start");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const sciBtn = document.querySelector(".scissors");
const rpsBtns = [rockBtn , paperBtn, sciBtn];
const winnerText = document.querySelector('.winnerText')
const result = document.querySelector('.result')
const results = document.querySelector('.results')
const playerScores = document.querySelector(".playerScores")
const rounds = document.querySelector('.rounds');
const intro = document.querySelector(".intro");
const scores = document.querySelector(".scores");
const buttons = document.querySelector(".buttons");
const choices = document.querySelector(".choices");
const body = document.querySelector(".body");
const reset = document.querySelector(".reset")


//create function to generate random computer input (either rock, paper, or scissors)
function getComputerChoice() {
    // generate random number
    const num = Math.floor(Math.random()*3);
    let compChoice = "";
    //assign number to rock, paper, or scissors
    if (num == 0){
        compChoice = "ROCK";
    }
    else if (num == 1) {
        compChoice = "PAPER";
    }
    else if (num == 2) {
        compChoice = "SCISSORS";
    }
    return compChoice;

}    

//create function to receive player input via button press

//create a function to determine the winner
function decideWinner(playerChoice,computerChoice) {
    if (playerChoice == "ROCK" && computerChoice == "SCISSORS" || playerChoice == "PAPER" && computerChoice == "ROCK" || playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        return "player";
    }
    else if (playerChoice == "ROCK" && computerChoice == "PAPER" || playerChoice == "PAPER" && computerChoice == "SCISSORS" || playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        return "computer";
    }
    else {
        return "tie";
    }
}


// create a function to play thorugh a round of rock paper scissor and returns win or loss statement
function playRound(playerChoice) {
        compChoice = getComputerChoice();
        return decideWinner(playerChoice,compChoice);
}

function playGame() {
    //create local variables to track player and computer scores
    let compWins = 0;
    let playerWins = 0;
    let round = 1;
    //set initial text when game resets
    rounds.textContent = `Round 1`;
    playerScores.textContent = `Player Score: 0  |  Computer Score: 0`;

    //create loop to run game rounds as long as no player has reached 5 points yet
        //display victory message when player reaches 5 points


        //if the reset button is clicked, set player and comp wins to 0 and remove round text
        reset.addEventListener('click', function(e) {
            scores.classList.remove("hide");
            buttons.classList.remove("hide");
            results.classList.add("hide");
            compWins = 0;
            playerWins = 0;
            round = 1;
            winnerText.textContent = ""
        })
        
        //when a button is clicked, play a round with player choice matching the button
        rpsBtns.forEach((rpsBtn) => rpsBtn.addEventListener('click', function(e) {
            playerChoice = e.target.id.toUpperCase();
            winner = playRound(playerChoice);


            //update player or comp wins and update who won the previous rund
            choices.textContent = `Player Choice: ${playerChoice}  |  Computer Choice: ${compChoice}`
            if (winner == "player") {
                playerWins++;
                winnerText.textContent = `You have won Round ${round}!`

            }
            else if (winner == "computer") {
                compWins++;
                winnerText.textContent = `The computer has won Round ${round}`
            }
            else{
                winnerText.textContent = `Round ${round} is a tie`
            }
            
            //update scores
            playerScores.textContent = `Player Score: ${playerWins}  |  Computer Score: ${compWins}`;

            //update round number
            round++;
            rounds.textContent = `Round ${round}`;


            //when either player reaches 5 wins, transfer to result screen
            if (playerWins == 5 || compWins == 5){
                scores.classList.add("hide")
                buttons.classList.add("hide")
                results.classList.remove("hide")
                body.style.cssText = 'justify-content:center;'
                if (playerWins == 5) {
                    result.textContent = "You beat the shit out of that computer, good work!"
                }
                else if (compWins == 5) {
                    result.textContent = "The computer has beaten you. Try again nerd"
                }
            }
}))
        
        
        }
//create function that will transition page from start screen to rps game when start buton clicked

//when start button is clicked, transfer over to play screen
start.addEventListener('click',function(e) {
    intro.classList.add("hide");
    scores.classList.remove("hide");
    buttons.classList.remove("hide");
    reset.classList.remove("hide")
});


playGame();
//playRound();
