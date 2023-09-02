var carimg = document.getElementById('carimg');
var CarStart;
var StartBtn = document.getElementById('StartBtn');
var StopBtn = document.getElementById('StopBtn');
var m = 0;

StartBtn.addEventListener('click',function(){
    CarStart = setInterval(run,100);

    function run(){
        if(m==1300){
            clearInterval(CarStart);
            m=0;
        }
        else{
            m+= 10;
            console.log(m)
            carimg.style.marginLeft=m+'px';
        }
    }
})


StopBtn.addEventListener('click',function(){
    clearInterval(CarStart);
})