//Q: Infinite currying: add(a)(b)(c)...(n)()

//Explanation:
// Here's what happens step by step:

// add(4):

// a is 4.
// Returns a function that expects b.
// The returned function from add(4) is called with 5: add(4)(5):

// a is 4.
// b is 5.
// Since b is truthy, it calls add again with a + b, which is 4 + 5 = 9.
// This returns add(9).
// The returned function from add(9) is called with 3: add(9)(3):

// a is 9.
// b is 3.
// Since b is truthy, it calls add again with a + b, which is 9 + 3 = 12.
// This returns add(12).
// The returned function from add(12) is called without any argument: add(12)():

// a is 12.
// b is undefined (or falsy).
// Since b is falsy, it returns a, which is 12.
// Final Output
// The final output is 12, which is printed by console.log.

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    };
}

console.log(add(4)(5)(3)());
console.log(add(4)(5)());