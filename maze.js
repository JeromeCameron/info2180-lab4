"use strict";

window.onload = function(){

    //highlight first wall if touched
    let trigger = document.getElementById("boundary1");
    trigger.addEventListener("mouseover", function(){
        trigger.classList.add('youlose');
    });

    //highlight any wall touched
    let triggerAny = document.querySelectorAll("div#maze > div.boundary");

    triggerAny.forEach(item => item.addEventListener("mouseover", function(){
        item.classList.add('youlose');
    }));

    //check if winner
    let finish = document.getElementById('end');
    finish.addEventListener("mouseover", function(){
        let tracker = 0;
        triggerAny.forEach(function(item){
            if (item.classList.contains('youlose')){
                 tracker = tracker + 1;
            }
        });
        tracker === 0 ? alert("You Win!") : alert("You Lose!");
    });

    //restart game
    let startGame = document.getElementById('start');
    startGame.addEventListener("click", function(){
        triggerAny.forEach(item => {
            item.classList.remove('youlose');
        });
    });
}
