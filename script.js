function getComputerChoice() {
    let choiceNumber = Math.floor((Math.random()*3));
    let choice;

    switch(choiceNumber) {
        case 0:
            choice="rock";
            break;
        case 1:
            choice="paper";
            break;
        case 2:
            choice="scissors";
            break;
    }

    return choice;
}

function getHumanChoice() {
    let choice=prompt("Enter your choice: rock,paper or scissors: ");
    return choice.toLowerCase();
}

let humanScore=0;
let computerScore=0;

let result=document.querySelector("#result");

function playRound(humanChoice,computerChoice) {
    

    if(humanChoice == computerChoice) {
        result.textContent="Tie!";
    } else if(humanChoice=="rock" && computerChoice=="paper") {
        result.textContent="You lose! Paper beats rock.";
        computerScore++;
    } else if(humanChoice=="rock" && computerChoice=="scissors") {
        result.textContent="You win! Rock beats scissors";
        humanScore++;
    } else if(humanChoice=="paper" && computerChoice=="rock") {
        result.textContent="You win! Paper beats rock!";
        humanScore++;
    } else if(humanChoice=="paper" && computerChoice=="scissors") {
        result.textContent="You lose! Scissors beat paper.";
        computerScore++;
    } else if(humanChoice=="scissors" && computerChoice=="rock") {
        result.textContent="You lose! Rock beats scissors.";
        computerScore++;
    } else if(humanChoice=="scissors" && computerChoice=="paper") {
        result.textContent="You win! Scissors beat paper.";
        humanScore++;
    }
}





/*function playGame() {
    humanScore=0;
    computerScore=0;

    for(let i=0; i<5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);
    }
}

playGame()*/

let playerResult = document.querySelector("#playerResult");
let pcResult = document.querySelector("#pcResult");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function() {
    let pcChoice = getComputerChoice();
    playRound("rock",pcChoice);
    playerResult.textContent= humanScore;
    pcResult.textContent= computerScore;
    if(humanScore === 5){
        result.textContent="You win!";
    } else if (computerScore === 5) {
        result.textContent="Computer wins!";
    }
})

const paperButton= document.querySelector("#paper");
paperButton.addEventListener("click", function() {
    let pcChoice=getComputerChoice();
    playRound("paper",pcChoice);
    playerResult.textContent= humanScore;
    pcResult.textContent= computerScore;
    if(humanScore === 5){
        result.textContent="You win!";
    } else if (computerScore === 5) {
        result.textContent="Computer wins!";
    }
})

const scissorsButton= document.querySelector("#scissors");
scissorsButton.addEventListener("click", function() {
    let pcChoice=getComputerChoice();
    playRound("scissors",pcChoice);
    playerResult.textContent= humanScore;
    pcResult.textContent= computerScore;
    if(humanScore === 5){
        result.textContent="You win!";
    } else if (computerScore === 5) {
        result.textContent="Computer wins!";
    }
})





