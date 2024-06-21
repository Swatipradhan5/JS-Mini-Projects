let incrBtn = document.querySelector(".incr");
let decrBtn = document.querySelector(".decr");
let resetBtn = document.querySelector(".reset");
let counterVal = document.querySelector("h2");
let inputVal = document.querySelector("input");
let incrDecrVal = 1;

inputVal.addEventListener("change", function(){
    let val = parseInt(inputVal.value);
    if(val == '')
    {
        incrDecrVal = 1;
        return;
    }
    incrDecrVal = val;
    if(incrDecrVal <=0)
    {
        incrDecrVal =1;
        alert("Enter only Positive Value");
        return;
    }
})

incrBtn.addEventListener("click",function(){
    let value = parseInt(counterVal.innerText);
    value +=incrDecrVal;
   counterVal.innerText = value;
})
decrBtn.addEventListener("click", function(){
    let value = parseInt(counterVal.innerText);
    value -= incrDecrVal;
    if(value <0)
    {
        return;
    }
    counterVal.innerText = value;
})
resetBtn.addEventListener("click", function(){
    counterVal.innerText = 0;
    inputVal.value =0;
    incrDecrVal = 1;
})
