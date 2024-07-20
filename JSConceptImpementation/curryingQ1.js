// Q: Do it using function currying
// evaluate("addition")(4)(2) => 6
// evaluate("substraction")(4)(2) => 6
// evaluate("multiply")(4)(2) => 6
// evaluate("divide")(4)(2) => 6

function evaluate(operation){
    return function(val1){
        return function(val2){
            if(operation === "addition")
                return val1+val2;
            else if(operation === "substraction")
                return val1-val2;
            else if(operation === "multiply")
                return val1*val2;
            else if(operation === "divide")
                return val1/val2;
            else
                return "Inavlid Operation";
        }
    }
}

console.log("Add - ",evaluate("addition")(4)(2));
console.log("Sub - ",evaluate("substraction")(4)(2));
console.log("Mul - ",evaluate("multiply")(4)(2));
console.log("Div - ", evaluate("divide")(4)(2));
