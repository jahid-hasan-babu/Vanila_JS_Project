var Input = document.getElementById("input");
var Microphone = document.getElementById("microphone");
var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(Recognition){
    var recognition = new webkitSpeechRecognition();
    Microphone.addEventListener('click',function(){
        recognition.start();
    });
    recognition.addEventListener("result",function(e){
        var trans = e.results[0][0].transcript;
        Input.value= trans;
    })

}


