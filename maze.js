"use strict";

window.onload = function(){

      //Variables
      let triggerAny = document.querySelectorAll("div#maze > div.boundary");
      let winLose = document.getElementById('status');
      let finish = document.getElementById('end');
      let startGame = document.getElementById('start');
      let playArea = document.getElementById('maze');

      startGame.addEventListener("mouseover", function(){

            //Exercise 1: Single boundary turns red
            /*let trigger = document.getElementById("boundary1");
            trigger.addEventListener("mouseover", function(){
                trigger.classList.add('youlose');
            });*/

            winLose.innerHTML = "New Game Started!";

            //Exercise 2: All boundaries glow red on hover
            triggerAny.forEach(item => item.addEventListener("mouseover", function(){
                item.classList.add('youlose');
            }));

            //Alerts on successful completion of maze /Exercise 5: On-Page status updates
            finish.addEventListener("mouseover", function(){
                let tracker = 0;
                triggerAny.forEach(function(item){
                    if (item.classList.contains('youlose')){
                         tracker = tracker + 1;
                    }
                });
                tracker === 0 ? winLose.innerHTML = "You Win!" : winLose.innerHTML = "You Lose!";
            });

            //Exercise 4: Restartable maze
            startGame.addEventListener("click", function(){
                triggerAny.forEach(item => {
                    item.classList.remove('youlose');
                });
                //Exercise 6: Disallow cheating
                playArea.onmouseleave = function(){
                    if(winLose.innerHTML != "You Win!"){
                      winLose.innerHTML = "You Lose!"
                      triggerAny.forEach(item => {
                        item.classList.add('youlose');
                      });
                    }
                };

            });

    });

}
