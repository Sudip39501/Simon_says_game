let gameSeq =[];
let userSeq = [];

let started = false;
let level = 0 ;
let hs = 0;

let btns =["red" , "green" , 'blue' , 'yellow'];

let h2 = document.querySelector('h2');

let start = document.querySelector("button");
start.addEventListener("click",function(event){
this.style.display = 'none';
if(started == false){
    console.log("game is stated");
    started = true;
    // e = event.target;
    levelUp();

}
})

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener('click',btnpress);
}

function levelUp(){
    level++;
    userSeq=[];
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*4);
    let randColor = btns[ranIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn = document.querySelector(`.${randColor}`)
    btnflash(randBtn);

} 
function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
  btn.classList.remove("flash")},450);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
  btn.classList.remove("userflash")},150);
}
function btnpress(){
   
  //  console.log("button was pressed");
   userSeq.push(this.getAttribute('id'));
  //  console.log(userSeq);
   userflash(this);
   check(userSeq.length-1)
}

function check(idx){
  if(gameSeq[idx] === userSeq[idx]){
    if(gameSeq.length === userSeq.length){

      levelUp();
    }
  }
  else{
        let body = document.querySelector("body");
          body.classList.add("red");
          setTimeout(function(){
          body.classList.remove("red")},150);
         
          if (level>hs ){
            hs = level ;
          };
          let p = document.querySelector("p");
          p.innerText = `High score ${hs}` ;
         h2.innerHTML = `GameOver! your score is <b>${level}</b> <br>Press New Game to start`;
        reset();
  }
}


function reset(){
    level = 0;
    started = false;
    gameSeq =[];
    start.style.display ='inline-block' ;
    start.innerText= "New Game" ;
    start.addEventListener("click",function(){
      this.innerText = 'start' ;
    })
}

