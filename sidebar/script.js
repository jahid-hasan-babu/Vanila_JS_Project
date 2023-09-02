var ToggleBtn = document.getElementById("ToggleBtn");
var SideBar = document.getElementById("SideBar");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");



ToggleBtn.addEventListener('click',function(){
    SideBar.classList.toggle("side-bar");
    SideBar.classList.toggle("sidebarClose");
    text1.classList.toggle("open");
    text2.classList.toggle("open");
    text3.classList.toggle("open");
    text4.classList.toggle("open");
    text5.classList.toggle("open");
});