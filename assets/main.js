
// Scroll header function //
function scrollHeader(){

    if(
        document.getElementsByClassName("choices")[0].style.display == "none" ||
        document.getElementsByClassName("choices")[0].style.display == ""
    ){
        document.getElementsByClassName("choices")[0].style.display = "block";
        if(document.getElementsByClassName("choices")[0].classList.contains("choices-animation-close-class")){
            document.getElementsByClassName("choices")[0].classList.remove("choices-animation-close-class");
        }
        document.getElementsByClassName("choices")[0].classList.add("choices-animation-open-class");
    }else{
        document.getElementsByClassName("choices")[0].classList.remove("choices-animation-open-class");
        document.getElementsByClassName("choices")[0].classList.add("choices-animation-close-class");
        setTimeout(()=>{
            document.getElementsByClassName("choices")[0].style.display = "none";
        }, 400);
    }

}

// Goto function //
function gotoSection(id){

    scrollHeader();
    document.getElementById(id).click();
    
}

// On window load //
window.onload = () => {

    setTimeout(()=>{
        document.getElementById("loading").style.display = "none";
        document.getElementsByTagName("main")[0].style.display = "block";
    }, 500);

    document.getElementsByClassName("three-bars")[0].onclick = () => {

        scrollHeader();

    }

}