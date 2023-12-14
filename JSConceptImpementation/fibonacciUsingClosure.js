// Implement fibonacci series using closure.

function fibonacciSeries(){

    let a=0, b=1;
    return function(){

        const result=a;

        // a=b;
        // b=a+b; generic way of swapping

        [a,b]=[b, a+b] //swapping using ES6 concept of array destructuring.

        return result;
        
    }
}

const generateFibonacci = fibonacciSeries();

console.log(generateFibonacci());