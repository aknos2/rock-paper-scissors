function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

let result = getComputerChoice();

if(result === 1) {
    return console.log("Rock");
} else if( result === 2) {
    return console.log("Paper");
} else {
    return console.log("Scissor");
}

console.log(getComputerChoice());