const navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click",()=>{
   
    document.getElementById("nav-show").classList.toggle("show");
}) 
const themeChanger = document.getElementById("theme-changer");
themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle("darkmode");
}) 