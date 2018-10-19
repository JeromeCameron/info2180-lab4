"use strict";

window.onload = function(){

    let test = document.getElementById("boundary1");

    test.addEventListener("mouseover", function(){
        test.classList.add('youlose');
    });
}
