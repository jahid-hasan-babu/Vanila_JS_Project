var Image = ['pic-1.png','pic-2.png','pic-3.png','pic-4.png'];
var MyImage = document.getElementById('MyImage');
var countIndex = -1;
function MyImage_change(){
    countIndex++;
    if(countIndex >= Image.length){
        countIndex = 0;
        MyImage.src = Image[countIndex];
    }
    else{
        MyImage.src = Image[countIndex];
    }
    setTimeout("MyImage_change()",1000);
}
window.onload=MyImage_change();