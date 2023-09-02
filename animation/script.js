window.addEventListener('scroll',function(){
    var main = document.getElementById("main");
    var contentPosition = main.getBoundingClientRect().top;
    var scroll = window.scrollY;
    if(contentPosition<scroll){
        main.classList.add("active");
    }
    else{
        main.classList.remove("active");
    }
})