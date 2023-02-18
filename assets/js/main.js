"use strict";

var containerOptions = document.querySelector(".container-options");
var options = document.querySelectorAll(".container-options .options");
var options_lg = document.querySelectorAll(".container-options-lg .options");
var canvas = document.querySelector("#canvas");

// Scroll header function //
function scrollHeader(){

    "use strict";

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

    "use strict";

    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";

    document.getElementsByClassName("three-bars")[0].onclick = () => {
        scrollHeader();
    }

    options.forEach( (option) => {
        option.addEventListener("click", ()=>{
            scrollHeader();
            document.getElementById(option.getAttribute("section")).click();
        });
    });

    options_lg.forEach( (option) => {
        option.addEventListener("click", ()=>{
            document.getElementById(option.getAttribute("section")).click();
        });
    });

}

function nav_bg_animation(){

    

}

// On window load //
window.onload = () => {

    setup();
    
}

document.getElementById("iframe").onload = () => {

    setup();

}