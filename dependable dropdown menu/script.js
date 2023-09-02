function change(){
    var Country = document.getElementById("COUNTRY").value;

    var city ="";

    if(Country=="Bangladesh"){
        city=["Dhaka","Rajshashi","Barishal","Rangpur","Cumilla"];
    }
    else if(Country=="India"){
        city=["Dilhi","Kolkata","Panjab","Mumbai"];
    }
    else if(Country=="Pakistan"){
        city=["Islamabad","Lahore","Multan"];
    }

    var string = "";
    for(i=0; i<city.length;i++){
        string =string+ "<option>" + city[i] + "</option>"
    }

    string = "<select>" +string+  "</ select>";
    document.getElementById("select").innerHTML=string;
}