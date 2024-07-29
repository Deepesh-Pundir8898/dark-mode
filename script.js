const btn = document.querySelector(".darkMode-button");

btn.addEventListener("click",()=>{
    var element =document.body;
    var moveCircle =document.querySelector(".white-circle")
    element.classList.toggle("mystyle");
    moveCircle.classList.toggle("move-circle")
})