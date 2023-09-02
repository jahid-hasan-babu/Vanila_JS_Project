//for project
var count = 0;
var project = setInterval(project,10);
function project(){
    count++;
    var num1 = document.getElementById("num1").innerHTML=count;
    if(count==200)
    {
        clearInterval(project)
    }
}

//for client
var count2 = 0;
var client = setInterval(client,10);
function client(){
    count2++;
    var num1 = document.getElementById("num2").innerHTML=count2;
    if(count2==500)
    {
        clearInterval(client)
    }
}

//for achive
var count3 = 0;
var achive = setInterval(achive,10);
function achive(){
    count3++;
    var num1 = document.getElementById("num3").innerHTML=count3;
    if(count3==50)
    {
        clearInterval(achive)
    }
}

