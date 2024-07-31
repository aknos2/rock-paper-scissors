"use strict";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let humanChoice = "";


function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function getHumanChoice() {
  rock.addEventListener("click", () => {
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
  });
  paper.addEventListener("click", () => {
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
  });
  scissor.addEventListener("click", () => {
    humanChoice = "scissor";
    playRound(humanChoice, getComputerChoice());
  });
}

  function playRound(humanChoice, computerChoice) {
    result.textContent = (`Human: ${humanChoice}, Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
    return console.log("draw");
  } else if (
    (humanChoice === "scissor" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "rock" && computerChoice === "scissor") 
  ){
    console.log("You won!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  } 
    roundsPlayed++;

    if(roundsPlayed >= 5) {
      finalScore();
    }
}


function finalScore() {
  if (humanScore > computerScore) {
    console.log("Congrats! You won!");
  } else if (humanScore < computerScore) {
    console.log("You lost. Try again.");
  } else {
    console.log("Draw. Try again.");
  }
}

getHumanChoice();

/*function getHumanChoice() {
    let choice;
    const validChoices = ["rock", "paper", "scissor"];

    do {
      choice = prompt(`Rock, paper, or scissor? (5 rounds game)`); 
      if (choice === null) {
        console.log("You quit the game");
        return null;
      }
      choice = choice.toLowerCase();
    } while (!validChoices.includes(choice));

    return choice;
}
*/