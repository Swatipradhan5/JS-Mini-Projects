let addBtnRef = document.querySelector(".addTask-input .fa-circle-plus");
let inputRef = document.querySelector("input");
let listContainerParentRef = document.querySelector("div .list-container");
let ulRef = document.querySelector(".task-list");

//function addTask to add a task

function addTask()
{
    let inputValue= inputRef.value.trim();
    if(inputValue === "")
    {
        alert("Please enter a task!");
    }
    else
    {
        let liEle = document.createElement('li');
        liEle.innerHTML = inputValue;
        ulRef.appendChild(liEle);
        let delBtnSpan = document.createElement('span');
        delBtnSpan.innerHTML = '<i class="fa-solid fa-circle-xmark" id="delBtn"></i>';
        liEle.appendChild(delBtnSpan);
    }
    inputRef.value='';
}

//calling addTask() when either Enter or add button is clicked.

inputRef.addEventListener("keypress", (e)=>{
    if(e.key === "Enter")
    {
        addTask();
    }
});
addBtnRef.addEventListener("click",(e)=>{
    addTask();
});

//adding eventListener to UL to access LI, SPAN tag.

ulRef.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle('checked');
    }
    else if(e.target.id === "delBtn")
    {
        e.target.parentElement.parentElement.remove();
    }
})