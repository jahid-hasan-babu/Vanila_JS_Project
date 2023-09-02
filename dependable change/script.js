var fontSize = document.getElementById("fontSize");
var div = document.getElementById("div");
var back = document.getElementById("back");
var under = document.getElementById("under");
var color = document.getElementById("color");
var weight = document.getElementById("weight");



fontSize.addEventListener('change',function(e){
    div.style.fontSize=e.target.value;
});
color.addEventListener('change',function(e){
    div.style.color=e.target.value;
});
weight.addEventListener('change',function(e){
    div.style.fontWeight=e.target.value;
});
back.addEventListener('change',function(e){
    div.style.backgroundColor=e.target.value;
});
under.addEventListener('click',function(e){
    div.classList.toggle("under1")=e.target.value;
});