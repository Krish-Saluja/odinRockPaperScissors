let pChoice = prompt("Please enter your choice!(rock, paper or scissors)");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Draw!");
    }
    else if (playerSelection=== "scissors" && computerSelection==="paper"){
        console.log("Player won!");
    }
    else if (playerSelection=== "rock" && computerSelection==="scissors"){
        console.log("Player won!");
    }
    else if (playerSelection=== "paper" && computerSelection==="rock"){
        console.log("Player won!");
    }
    else if (playerSelection=== "rock" && computerSelection==="paper"){
        console.log("Computer won!");
    }
    else if (playerSelection=== "scissors" && computerSelection==="rock"){
        console.log("Computer won!");
    }
    else if (playerSelection=== "paper" && computerSelection==="scissors"){
        console.log("Computer won!");
    }
    
    else {
        console.log("Please enter a Valid Choice.")
    }


  }
  
  const playerSelection = pChoice.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerSelection, computerSelection);


function getComputerChoice() {
    const choices = ["rock","paper", "scissors"];
    const compChoice = Math.floor(Math.random()*choices.length); //I initially tried using || but that doesn't work so we move into using math.floor

    return choices[compChoice];
}
