"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;

    if( result === 1 ) {
        console.log("Computer chose: rock");
        return "rock";
    } else if( result === 2 ) {
        console.log("Computer chose: paper")
        return "paper";
    } else {
        console.log("Computer chose: scissor")
        return "scissor";
    }
    
}


function getHumanChoice() {
    let choice;
    const validChoices = ["rock", "paper", "scissor"];

    do {
      choice = prompt(`Rock, paper, or scissor? (5 rounds)`); 
      if (choice === null) {
        console.log("You quit the game");
        return null;
      }
      choice = choice.toLowerCase();
    } while( !validChoices.includes(choice) );

    return choice;
}

  function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
    return console.log("draw");
  } else if(
    (humanChoice === "scissor" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "rock" && computerChoice === "scissor") 
  ){
    console.log("You won!");
    return humanScore++
  } else {
    console.log("You lose!");
    return computerScore++
  } 
}

function playGame() {
  let i = 0;
  do {
    const humanSelection = getHumanChoice();
    if(humanSelection === null) {
      console.log("Game ended");
      return;
    }
    const computerSelection = getComputerChoice();  
    playRound(humanSelection, computerSelection);
    console.log(`Player score: ${humanScore} \nComputer score: ${computerScore}`);
    i++;
  } while (i < 5);
  finalScore();
}

function finalScore() {
  if(humanScore > 2) {
    console.log("Congrats! You won!");
  } else if (humanScore <= 2) {
    console.log("You lost. Try again.");
  } else if (humanScore === computerScore) {
    console.log("Draw. Try again.");
  } else {
    console.log("Try again?");
  }
}

console.log(playGame());