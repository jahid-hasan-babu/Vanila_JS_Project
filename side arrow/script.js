var arrow = document.getElementById("arrow");
window.onscroll = function(){
    var scroll = scrollY;
    if(scroll > 100){
        arrow.classList.add('active');
    }
    else{
        arrow.classList.remove('active');
    }
};