"use strict";


window.onload = function(){

    //Exercise 4: Restartable maze
    let startGame = document.getElementById('start');
    startGame.addEventListener("click", function(){

        //Exercise 1: Single boundary turns red
        /*let trigger = document.getElementById("boundary1");
        trigger.addEventListener("mouseover", function(){
            trigger.classList.add('youlose');
        });*/

        //Exercise 2: All boundaries glow red on hover
        let triggerAny = document.querySelectorAll("div#maze > div.boundary");
        triggerAny.forEach(item => item.addEventListener("mouseover", function(){
            item.classList.add('youlose');
        }));

        //Alerts on successful completion of maze /Exercise 5: On-Page status updates
        let winLose = document.getElementById('status');
        let finish = document.getElementById('end');
        finish.addEventListener("mouseover", function(){
            let tracker = 0;
            triggerAny.forEach(function(item){
                if (item.classList.contains('youlose')){
                     tracker = tracker + 1;
                }
            });
            tracker === 0 ? winLose.innerHTML = "You Win!" : winLose.innerHTML = "You Lose!";
        });

        winLose.innerHTML = "Use your mouse, click the \"S\" to begin.";
        triggerAny.forEach(item => {
            item.classList.remove('youlose');
        });
        //Exercise 6: Disallow cheating
        let playArea = document.getElementById('maze');
        playArea.onmouseleave = function(){
            if(winLose.innerHTML != "You Win!"){
                winLose.innerHTML = "You Lose!"
                triggerAny.forEach(item => {
                    item.classList.add('youlose');
                });
            }
            };
    });
}
