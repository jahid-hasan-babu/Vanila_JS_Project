var open = document.getElementById('open-btn');
var close = document.getElementById("close-btn");
var modal = document.getElementById('modal');

open.addEventListener('click',function(){
    modal.classList.add('show');
});


close.addEventListener('click',function(){
    modal.classList.remove('show');
});