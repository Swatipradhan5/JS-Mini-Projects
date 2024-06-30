let starContainerRef = document.querySelector(".star-container");
let allStar = document.querySelectorAll(".star");
let ratingRef = document.querySelector("h3");

let prevClicked =0; //saving prev clicked pos


starContainerRef.addEventListener("click", function(e){
    //console.log(e.target.dataset.pos);

    let currentClicked = e.target.dataset.pos;

    //to remove only the prevClicked stars, rather then all
    for(let i=0;i<prevClicked;i++)
    {
        allStar[i].classList.remove("yellow");
    }

    //to add in all star until clicked star
    for(let i=0;i<currentClicked;i++)
    {
        allStar[i].classList.add("yellow");
    }

    ratingRef.innerText = "Rating:" +currentClicked;

    prevClicked=currentClicked;
   
})

starContainerRef.addEventListener("mouseover", function(e){
    let currentClicked = e.target.dataset.pos;

    for(let i=0;i<allStar.length;i++)
    {
        allStar[i].classList.remove("yellow");
    }
    for(let i=0;i<currentClicked;i++)
    {
        allStar[i].classList.add("yellow");
    }

    
})

starContainerRef.addEventListener("mouseleave", function(e){

    //remving yellow from all star
    for(let i=0;i<allStar.length;i++)
    {
        allStar[i].classList.remove("yellow");
    }
    

    //adding yellow for previosuly clicked star
    for(let i=0;i<prevClicked;i++)
    {
        allStar[i].classList.add("yellow");
    }    
})