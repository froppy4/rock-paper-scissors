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

    

// create a function to play thorugh a round of rock paper scissor and returns win or loss statement
function playRound(playerSelection,computerSelection) {
    // make player choice case insensitive
    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection;

    // if player choice does not match ROCK PAPER or SCISSORS, return error message
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
       return "This is not a valid input, please try again";
    }
    // compare player choice and computer choice
    else {
        if (playerChoice == "ROCK" && computerChoice == "SCISSORS" || playerChoice == "PAPER" && computerChoice == "ROCK" || playerChoice == "SCISSORS" && computerChoice == "PAPER") {
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" Congratulations, you won!";
        }
        else if (playerChoice == "ROCK" && computerChoice == "PAPER" || playerChoice == "PAPER" && computerChoice == "SCISSORS" || playerChoice == "SCISSORS" && computerChoice == "ROCK") {
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" Sorry, you have lost";
        }
        else {
            return "Player Choice: " +playerChoice + " Computer Choice: "+computerChoice +" It's a tie";
        }
  }



}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// create loop to play 5 games

    // define variables to track scores

    
    // end loop and display winner if player or computer win 3 times


    // run one game of rock paper scissors


    // add to winners score