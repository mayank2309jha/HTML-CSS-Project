function myFunction(){
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav"){
        x.className=x.className+"responsive";
    }
    else{
        x.className = "topnav";
    }
}
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

singInButton.addEventListener("click",() =>{
    container.classList.add("right-panel-active")
});
signUpButton.addEventListener("click",() =>{
    container.classList.remove("right-panel-active")
});