var Text = ['My name is Jahid','Web devloper','APP devlopment','Graphics design'];
var count = 0;
var index = 0;
var currenttext = 0;
var letter = 0;

setInterval(mytype,200);
function mytype(){
    currenttext = Text[count];

    letter = currenttext.slice(0,index++);
    document.querySelector('h1').innerHTML=letter;
    if(letter.length==currenttext.length){
        count++;
        index = 0;
    }
    if(count==Text.length){
        count = 0;
    }
};