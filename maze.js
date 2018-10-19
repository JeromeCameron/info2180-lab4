"use strict";

window.onload = function(){

    let trigger = document.getElementById("boundary1");

    trigger.addEventListener("mouseover", function(){
        trigger.classList.add('youlose');
    });

    let triggerAny = document.querySelectorAll("div#maze > div.boundary");
    console.log(triggerAny);
    triggerAny.forEach(item => item.addEventListener("mouseover", function(){
        item.classList.add('youlose');
    }));
}
