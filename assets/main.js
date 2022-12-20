"use strict";

var choices = document.getElementsByClassName("choices")[0];
var options = document.querySelectorAll(".options");

// Scroll header function //
function scrollHeader(){

    if( choices.style.display == "none" || choices.style.display == "" ){
        choices.style.display = "block";
        if( choices.classList.contains("choices-animation-close-class") ){
            choices.classList.remove("choices-animation-close-class");
        }
        choices.classList.add("choices-animation-open-class");
    }else{
        choices.classList.remove("choices-animation-open-class");
        choices.classList.add("choices-animation-close-class");
        setTimeout(()=>{ choices.style.display = "none"; }, 400);
    }

}

// Setup function //
function setup(){

    setTimeout(()=>{
        document.getElementById("loading").style.display = "none";
        document.getElementsByTagName("main")[0].style.display = "block";
    }, 500);

    document.getElementsByClassName("three-bars")[0].onclick = () => {
        scrollHeader();
    }

    options.forEach( (option) => {
        option.addEventListener("click", ()=>{
            scrollHeader();
            document.getElementById(option.getAttribute("section")).click();
        });
    });

}

// On window load //
window.onload = () => {

    setup();

}