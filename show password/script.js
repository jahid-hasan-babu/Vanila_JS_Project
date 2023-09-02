var pass = document.getElementById("password");

function mypass(){
    if(pass.type=="password"){
        pass.type ="text";
    }
    else{
        pass.type="password";
    }
}