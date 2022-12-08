
// Goto function //
function goto(id){
    document.getElementById("dailog-box-container").style.display = "0";
    document.getElementById(id).click();
}

// On window load // 
window.onload = () => {

    setTimeout(()=>{
        document.getElementById("dailog-box-container").style.display = "none";
        document.getElementById("all-elements").style.display = "block";
    }, 1000);

}