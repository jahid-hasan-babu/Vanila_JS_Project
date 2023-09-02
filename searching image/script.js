function myfun(){
    var search = document.getElementById("search");
    var Image = document.querySelectorAll(".image");
    for(var i = 0; i < Image.length; i++){
        Image[i].style.display="none";
    }
    for(var j=0; j < Image.length; j++){
        var title =  Image[j].getAttribute("data-title");

        if(search.value==title){
            Image[j].style="block"
        }
        if(search.value==''){
            Image[j].style="block"
        }
    }
}