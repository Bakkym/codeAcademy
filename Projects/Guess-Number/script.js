let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random()* 10);
}

// console.log(generateTarget());

let compareGuesses = (userGuess, computerGuess, secretNumber) => {
    if( (Math.abs(secretNumber - userGuess)) <= (Math.abs(secretNumber - computerGuess))){
        return true;
    } else {
        return false
    }
};

// console.log(compareGuesses(12,5,10))

let updateScore = winner => {
    if(winner === 'human'){
        humanScore ++;
    } else if ( winner === 'computer'){
        computerScore ++;
    } else {
        return 'invalid winner'
    }
};

// console.log(humanScore);
// updateScore('human');
// console.log(humanScore)

let advanceRound = () => {
    currentRoundNumber ++;
}

// console.log(currentRoundNumber);
// advanceRound();
// console.log(currentRoundNumber);

