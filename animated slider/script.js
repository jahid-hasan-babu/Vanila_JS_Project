var image = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg'];
var index = 0;
var img = document.getElementById('img');

setInterval(change,1000);

function change(){
    index++;
  
    if(index >= image.length){
        index = 0;
        img.src=image[index];

    }
    else{
        img.src=image[index];
    }
}