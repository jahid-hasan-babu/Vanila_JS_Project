var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
input1.addEventListener('input',function(){
    var bangla = input1.value;
    var english = input2.value;

    if(bangla > 100 || bangla < 0){
        input1.style.background = "red"
    }
    else{
        input1.style.background = "none"
    }
   
});
input2.addEventListener('input',function(){
    var english = input2.value;

    if(english > 100 || english < 0){
        input2.style.background = "red"
    }
    else{
        input2.style.background = "none"
    }
   
});
