let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let score;
let highest_score=0;
let started=false;
let level=0;
let h3=document.querySelector("h3");

let h2=document.querySelector("h2");

document.addEventListener("click",function() {
    if(started == false){
        started = true;
        levelUp();
    }
});
function gameFlash(btns){
    btns.classList.add("Flash");
    setTimeout(function(){
        btns.classList.remove("Flash");
    },100);
}

function userFlash(btns){
    btns.classList.add("userFlash");
    setTimeout(function(){
        btns.classList.remove("userFlash");
    },100);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameFlash(randBtn);

}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
    
        }
    }
        else{
            score=(level-1)*10;
            h2.innerHTML=`Game Over! Your score was <b>${score}</b> <br>Click anywhere to start.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },200);
            if(highest_score<score){
                highest_score=score;
                h3.innerText=`Highest Score = ${highest_score}`;
            }
            reset();
        }

}
function btnPress(){
    let  btn=this;
    userFlash(btn); 
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;


}
