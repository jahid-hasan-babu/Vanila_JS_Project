// copy  text start 
var CopyText = document.getElementById("CopyText");//.value akhane likthe pari
var CopyBtn = document.getElementById("CopyBtn");

CopyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(CopyText.value)
    alert("Copy Success")
})

// copy text end 
// cut section start 
var CutText = document.getElementById("CutText");

var CutBtn = document.getElementById("CutBtn");
CutBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(CutText.value)
    CutText.value="";
})
// cut section end 

// paste section start 

var PasteText = document.getElementById("PasteText");
var PasteBtn = document.getElementById("PasteBtn");

PasteBtn.addEventListener('click',function(){
    PasteText.value='';
    navigator.clipboard.readText()
    .then(function(text){
        PasteText.value = text;
    })
})

// paste section end 