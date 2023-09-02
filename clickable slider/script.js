//console.log('link') link cheak up
var image = ['pic-1.png','pic-2.png','pic-3.png','pic-4.png'];
var index = 0;
var imgln = image.length;
var img = document.getElementById("img");


function next(){
    index++;
    
    if(index >= imgln){
        index = 0;
        img.src = image[index];
    }
    else{
        img.src = image[index];
    }
};

function previous(){
    index--;

    if(index < 0){
        index = imgln - 1;
        img.src = image[index];
    }
    else{
        img.src = image[index];
    }
};