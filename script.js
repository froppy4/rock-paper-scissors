//create function to generate random computer input (either rock, paper, or scissors)
let winner = "";
const start = document.querySelector(".start")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

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

    

// create a function to play thorugh a round of rock paper scissor and returns win or loss statement
function playRound(playerSelection,computerSelection) {
    // make player choice case insensitive
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection;
    winner = ""
    // if player choice does not match ROCK PAPER or SCISSORS, return error message
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        console.log("This is not a valid input, please try again");
        return playRound(prompt("Please input a valid action this time."),getComputerChoice());
    }
    // compare player choice and computer choice
    else {
        if (playerChoice == "ROCK" && computerChoice == "SCISSORS" || playerChoice == "PAPER" && computerChoice == "ROCK" || playerChoice == "SCISSORS" && computerChoice == "PAPER") {
            winner = "player";
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" Congratulations, you won!";
        }
        else if (playerChoice == "ROCK" && computerChoice == "PAPER" || playerChoice == "PAPER" && computerChoice == "SCISSORS" || playerChoice == "SCISSORS" && computerChoice == "ROCK") {
            winner = "computer";
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" Sorry, you have lost";
        }
        else {
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" It's a tie";
        }
  }



}

function playGame() {
    //create local variables to track player and computer scores
    let compWins = 0;
    let playerWins = 0;

    //create loop to run game rounds as long as no player has reached 5 points yet
    while (compWins < 5 && playerWins < 5){
        
    }
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// create five round game function
/* function game() {
    // define variables to track scores
    let compWins = 0;
    let playerWins = 0;
    
    // create loop to play 5 games
    for(i=0;i<5;i++){
    
        // end loop and display winner if player or computer win 3 times
        if (compWins >= 3) {
            return "The Computer wins!";
        }
        else if (playerWins >= 3) {
            return "You have won!";
        }
        else {
            // run one game of rock paper scissorsg
            console.log("Round "+(i+1))
            console.log(playRound(prompt("Do you pick rock, paper, or scissors?"),getComputerChoice()));
            if (winner == "computer") {
                compWins = compWins + 1;
            }
            else if (winner == "player") {
                playerWins = playerWins + 1;
            }
            console.log("Player Score: "+playerWins + "   Computer Score: "+compWins)
            if (i==4) {
                if (compWins == 3){
                    return "The Computer wins!";
                }
                else if (playerWins == 3) {
                    return "You have won!";
                }
                else{
                    return "No winners";
                }
            }

        

        }

    }
      
}
     */

//create function that will transition page from start screen to rps game when start buton clicked


start.addEventListener('click',function(e) {
    const intro = document.querySelector(".intro");
    const scores = document.querySelector(".scores");
    const buttons = document.querySelector(".buttons");

    intro.classList.add("hide");
    console.log(intro.classList)
    scores.classList.remove("hide");
    buttons.classList.remove("hide");
});
