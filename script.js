function getComputerChoice() {
    const choices = ["Rock","Paper", "Scissors"];
    const compChoice = Math.floor(Math.random()*choices.length); //I initially tried using || but that doesn't work so we move into using math.floor

    return choices[compChoice];
}


