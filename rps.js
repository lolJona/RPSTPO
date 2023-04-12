let compScore = 0;
let playerScore = 0;
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const compchoice = Math.floor(Math.random() * options.length)
    let z = options[compchoice]
    return z
}

function playerSelection() {
    let choice = prompt("Make your choice: rock, paper, or scissors.");
    return choice
}

// if (playerSelection != "rock", "paper", or "scissors") {
//     document.getElementById("outcome").innerHTML = "You chose " + lowerchoice + ", the computer chose " + z ".";
//         }

function ruling(playerPick, compPick) {
    playerPick = playerSelection().toLowerCase();
    compPick = getComputerChoice().toLowerCase();
    if (playerPick == compPick) {
        console.log("Tie")
    }
    else if (
       (playerPick == "rock" && compPick == "paper") ||
       (playerPick == "paper" && compPick == "scissors") ||
       (playerPick == "scissors" && compPick == "rock")
    )
    {
        compScore = ++compScore;
        console.log("Computer wins!  Computer score is currently " + compScore + " and your score is " + playerScore + ".")
    }

    else {
        playerScore = ++playerScore;
        console.log("Player wins!  Computer score is currently " + compScore + " and your score is " + playerScore + ".")
    }


}