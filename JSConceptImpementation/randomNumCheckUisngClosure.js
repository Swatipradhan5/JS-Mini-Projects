// Implement a function that generates a random number between 1 to 100.
// And returns a function that checks if the random number matches the gussed number. 

function numberGame(){

    let targetNum = Math.floor(Math.random()*100)+1;
    return function(num){
        if(num === targetNum)
        {
            console.log("Congratulation! It matches");
        }
        else if(num < targetNum)
        {
            console.log("Try a higher number");
        }
        else{
            console.log("Try a lower number");
        }
    }
}

const guessedNum = numberGame();

console.log(guessedNum(50));