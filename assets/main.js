"use strict";

var containerOptions = document.getElementsByClassName("container-options")[0];
var options = document.querySelectorAll(".options");

// Scroll header function //
function scrollHeader(){

    if( containerOptions.style.display == "none" || containerOptions.style.display == "" ){
        containerOptions.style.display = "block";
        if( containerOptions.classList.contains("options-animation-close-class") ){
            containerOptions.classList.remove("options-animation-close-class");
        }
        containerOptions.classList.add("options-animation-open-class");
    }else{
        containerOptions.classList.remove("options-animation-open-class");
        containerOptions.classList.add("options-animation-close-class");
        setTimeout(()=>{ containerOptions.style.display = "none"; }, 400);
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