var number = document.getElementById("number");
var Btn = document.getElementById("btn");
var text = document.getElementById("text");
Btn.addEventListener('click',function(){
    var count = 0;


    for(var i = 2; i < number.value ; i++){
        if(number.value % i ==0){
            count++;
            break;
        }
    }
    if(count == 0){
        text.innerHTML="The number is prime"
    }
    else{
        text.innerHTML="The number is not prime"
    }
})