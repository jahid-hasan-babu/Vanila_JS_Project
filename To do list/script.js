var Name = document.getElementById("name");
var Roll = document.getElementById("roll");
var Dept = document.getElementById("dept");
var GPA = document.getElementById("gpa");
var BTN = document.getElementById("btn");

BTN.addEventListener('click',function(pera){
    pera.preventDefault();
    

    if(Name.value == ''){
        alert('Name unfilled');
    }
    else if(Roll.value == ''){
        alert('Roll unfilled');
    }
    else if(Dept.value == ''){
        alert('Dept unfilled');
    }
    
    else if(GPA.value == ''){
        alert('GPA unfilled');
    }
    else{
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');
       
        //name
        var td = document.createElement('td');
        td.innerHTML = Name.value;
        tr.appendChild(td);
      
        //roll
        var td1 = document.createElement('td');
        td1.innerHTML = Roll.value;
        tr.appendChild(td1);

        //dept
        var td2 = document.createElement('td');
        td2.innerHTML = Dept.value;
        tr.appendChild(td2);

        //gpa
        var td3 = document.createElement('td');
        td3.innerHTML = GPA.value;
        tr.appendChild(td3);
        tbody.appendChild(tr);
       
    }
    
    
      
});