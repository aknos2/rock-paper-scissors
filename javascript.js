"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;

    if( result === 1 ) {
        return console.log("rock");
    } else if( result === 2 ) {
        return console.log("paper");
    } else {
        return console.log("scissor");
    }
    
}


function getHumanChoice() {
    let choice;
    const validChoices = ["rock", "paper", "scissor"];
    
    do {
        choice = prompt("Rock, paper, or scissor?").toLowerCase(); 
    } while( !validChoices.includes(choice) );

    return choice;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    return console.log("draw");
  } else if("scissor", "paper" || "paper", "rock") {
    console.log("You won!");
    return humanScore++
  } else {
    console.log("You lose!");
    return computerScore++
  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function playGame() {

}

console.log(`Player score: ${humanScore} \n Computer score: ${computerScore}`);
