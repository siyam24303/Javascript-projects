let click=document.querySelector("#btn");
let clickCounter=document.querySelector(".click-count");

let count=0;

click.addEventListener("click",()=>{
    count++;
    clickCounter.innerText=`click count =  ${count}`;
});