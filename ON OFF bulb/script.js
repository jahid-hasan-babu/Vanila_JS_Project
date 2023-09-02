function lightBtn(match){
    var title = document.getElementById('title');
    var pic;
    for(var i=1; i<= 6; i++){
        if(match==0){
          pic="image/bulb off.png";
          title.innerHTML = "Light off"  
        }
        else{
            pic="image/bulb on.png";
            title.innerHTML = "Light On"
        }
       
        var light = document.getElementById('light'+(i));
        light.src = pic;
    }
}