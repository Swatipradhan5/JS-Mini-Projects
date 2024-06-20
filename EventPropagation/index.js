let grandParent = document.querySelector(".grandParent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

grandParent.addEventListener("click", function(e){
    console.log("GrandParent Clicked in capturing phase");
}, true);
parent.addEventListener("click", function(e){
    console.log("Target", e.target); //return where event happens
    console.log("Current Target", e.currentTarget); //return where event was attached
    console.log("Parent Clicked in capturing phase");
    console.log(e.eventPhase);
}, true);
child.addEventListener("click", function(e){
    console.log("Target", e.target);
    console.log("Current Target", e.currentTarget);
    console.log("Child Clicked in capturing phase");
},true);

grandParent.addEventListener("click", function(e){
    console.log("Another GrandParent Clicked in bubbling phase");
});
parent.addEventListener("click", function(e){
    console.log("Another Parent Clicked in bubbling phase");
});
child.addEventListener("click", function(e){
    console.log("Another Child Clicked in bubbling phase");
});


