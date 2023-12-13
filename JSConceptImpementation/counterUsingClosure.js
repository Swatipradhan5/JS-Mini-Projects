// Implement a counter function that returns a new counter instance each time its called and each instance maintains its own count.
// Do it without using class 

//Implementation of closure

function createCounter(){
    let count=0;  //closure application

    return function(){
        return ++count;
    }
}

const counter1 = createCounter();

console.log("Conter 1:",counter1());
console.log("Conter 1:",counter1());
console.log("Conter 1:",counter1());

const counter2 = createCounter();

console.log("Conter 2:",counter2());
console.log("Conter 2:",counter2());
console.log("Conter 2:",counter2());
console.log("Conter 2:",counter2());
console.log("Conter 2:",counter2());