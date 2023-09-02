var hexanumber = document.getElementById("hexaNumber");

var color = document.getElementById("color");

color.addEventListener('input',function(){
    var Inputcolor = color.value;
    hexanumber.value = Inputcolor;
    document.getElementById('learn').style.color=Inputcolor;
    document.body.style.backgroundColor=Inputcolor;
})