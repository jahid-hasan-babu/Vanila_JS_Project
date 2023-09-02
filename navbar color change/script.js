var bg_navbar = document.getElementById("bg-navbar");
window.onscroll = function(){
    var scroll_nav = window.scrollY;

    if(scroll_nav >= 100){
        bg_navbar.classList.add('after-scroll-navbar');
        console.log(scroll_nav)
    }
    else{
        bg_navbar.classList.remove('after-scroll-navbar') 
    }
}