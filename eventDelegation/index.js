let parentRef = document.querySelector(".parent");
let child1Ref = document.querySelector(".child1");
let child2Ref = document.querySelector(".child2");


//we added event listener only to parent and by the concept of event bubbling we are able to get the targeted childs.

parentRef.addEventListener("click", function(e){
    if(e.target == child1Ref)
    {
        console.log("Child1 Clicked!");
    }
    else if(e.target == child2Ref)
    {
        console.log("Child2 Clicked!");
    }
    else
    {
        console.log("Parent Clicked!");
    }
})