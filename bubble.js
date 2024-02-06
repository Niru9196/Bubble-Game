
let hitrn = 0;
function newHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn
    console.log("num")
}
 

function makeBubble(){
    let clutter = "";

    for(let i = 1;i<=110;i++){
        let rn = Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".container").innerHTML = clutter
}

let timer = 30;
function runTimer(){
    let timerID = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearTimeout(timerID);
            document.querySelector(".container").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}


var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#incScore").textContent = score;
}

document.querySelector(".container").addEventListener("click" , function(dets){
    let bubbleValue = Number(dets.target.textContent);
    if(hitrn === bubbleValue){
        increaseScore();
        makeBubble();
        newHit();
    }

})

runTimer();
makeBubble();
newHit();
