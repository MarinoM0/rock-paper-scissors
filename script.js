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


function playRound(humanChoice,computerChoice) {
    

    if(humanChoice == computerChoice) {
        console.log("Tie!")
    } else if(humanChoice=="rock" && computerChoice=="paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if(humanChoice=="rock" && computerChoice=="scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } else if(humanChoice=="paper" && computerChoice=="rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    } else if(humanChoice=="paper" && computerChoice=="scissors") {
        console.log("You lose! Scissors beat paper.");
        computerScore++;
    } else if(humanChoice=="scissors" && computerChoice=="rock") {
        console.log("You lose! Rock beats scissors.");
        humanScore++;
    } else if(humanChoice=="scissors" && computerChoice=="paper") {
        console.log("You win! Scissors beat paper.");
        computerScore++;
    }
}





function playGame() {
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

playGame()
