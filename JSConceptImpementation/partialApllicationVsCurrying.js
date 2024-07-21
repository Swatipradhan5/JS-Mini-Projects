//Partial application of sum() func, partial application transform a function into another func with small arity(no. of arguments),
//it is not currying
function add(a){
    return function(b,c){
        return a+b+c;
    };
}

console.log("Implemented through Partial Application of add() function : ",add(10)(2,3));

//Using currying, the no. of nested function returned is same as no. of arguments

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log("sum() function using currying : ",sum(2)(3)(4));

