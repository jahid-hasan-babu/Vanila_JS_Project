var Bangla = document.getElementById("bangla");
var English = document.getElementById("english");
var Physics = document.getElementById("physics");
var Math = document.getElementById("math");
var Add_btn = document.getElementById("add_btn");
var Input = document.querySelectorAll(".inputs");


for(var i = 0; i < Input.length; i++){
    Input[i].addEventListener('input',function(){
        for(var k=0; k<Input.length; k++){
            if(Input[k].value>100){
                Input[k].style.background="red";
            }
            else{
                Input[k].style.background="#fff";
            }
        }
    })
}

Add_btn.addEventListener('click',function(){

    if(Bangla.value == '' || English.value == '' || Physics.value == '' || Math.value == ''){
        alert("Please input");
    }
    else{
        var newBangla = parseInt(Bangla.value);
        var newEnglish = parseInt(English.value);
        var newPhysics = parseInt(Physics.value);
        var newMath = parseInt(Math.value);
        var newtotalmark = document.getElementById("totalmark");
        var totalMark = newBangla+newEnglish+newPhysics+newMath;
        newtotalmark.innerHTML=totalMark;
        newtotalmark.style.backgroundColor="green"

        var avgMark = document.getElementById("average");
        var avg = totalMark/4;
        avgMark.innerHTML=avg;
        avgMark.style.backgroundColor="green";

        var grade = document.getElementById("grade");
      

        if(avg>80 && avg<100){
            grade.innerHTML='A+';
        }
        else if(avg>70 && avg<80){
            grade.innerHTML='A';
        }
        else if(avg>60 && avg<70){
            grade.innerHTML='B';
        }
        else if(avg>40 && avg<60){
            grade.innerHTML='D';
        }
        else if(avg<40){
            grade.innerHTML='F';
        }
        else{
            grade.innerHTML='Invalid';
        }
        var pass = document.getElementById("pass");
        if(avg>39.5){
            pass.innerHTML="You are passed";
            pass.style.backgroundColor="blue"

        }
        else{
            pass.innerHTML="You are faield";
            pass.style.backgroundColor="yellow"
            pass.style.color="#000"
        }

    }

});