// Write a function sum(x)(y)(z)
// Returns sum of x+y+z


function sum(x){
    return function(y){
        return function(z){
            return z+y+x;
        }
    }
}

console.log(sum(1)(2)(3)); //this takes one argument after another as sum() returns a function, this is an example of function currying.