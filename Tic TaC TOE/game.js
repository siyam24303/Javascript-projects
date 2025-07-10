let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newBtn");
let newBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");
let drawMsg=document.querySelector("#drawMsg");


let turnO=true;
let count=0

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach ( (box)=>{
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true;
        count++;


        let isWinner = checkWinner();
        if(count===9 && !isWinner){
           showDraw()};
        
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};




 const showDraw=()=>{
    drawMsg.innerText="Game Draw";
    draw.classList.remove("hidee");
    disableBoxes();
};

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}


const GameClose= ()=>{
    for(box of boxes){
        box.disabled=true;
    }};
    
const newGame= ()=>{
        for(box of boxes){
            box.disabled=false;
            box.innerText="";
        }};

const resetGame=() =>{
    turnO=true;
    count=0;
    newGame();
    msgContainer.classList.add("hide");
    draw.classList.add("hidee");
}

const checkWinner=() => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){

            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                GameClose(); 
                return true;
            }
        }
}
 return false;
};

resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);