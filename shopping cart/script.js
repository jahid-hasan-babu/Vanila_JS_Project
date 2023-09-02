function increament(incDic,prc,itm){
    var count = document.getElementById(incDic);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var proa = document.getElementById("proa").innerHTML
    var chargeamount = document.getElementById("chargeamount").innerHTML
    var TOtalAMOUNT = document.getElementById("TOtalAMOUNT").innerHTML

    if(count.value >= 5){
        count.value = 5;
        alert('Only 5 products allow');
    }
    else{
        count.value++;
        var result = parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML = result;

        //product amount
        var totalAmount = parseInt(price.innerHTML)+parseInt(proa);
        document.getElementById("proa").innerHTML = totalAmount ;
        
        var Newresult = totalAmount+ parseInt(chargeamount);
        document.getElementById("TOtalAMOUNT").innerHTML=Newresult;



        var  kuponmaindiv = document.getElementById("kuponmaindiv");
        

        if(TOtalAMOUNT > 300){
            kuponmaindiv.style.display="block";
        }
    }
};


function decreament(incDic,prc,itm){
    var count = document.getElementById(incDic);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var proa = document.getElementById("proa").innerHTML
    var chargeamount = document.getElementById("chargeamount").innerHTML
    var TOtalAMOUNT = document.getElementById("TOtalAMOUNT").innerHTML

    if(count.value <= 0){
        count.value = 0;
        alert('Only minimum 1 products allow');
    }
    else{
        count.value--;
        var result = parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML = result;

        var totalAmount = parseInt(proa)- parseInt(price.innerHTML);
        document.getElementById("proa").innerHTML = totalAmount ;

        var Newresult = totalAmount+ parseInt(chargeamount);
        document.getElementById("TOtalAMOUNT").innerHTML=Newresult;



       
    }
};

var  kuponmaindiv = document.getElementById("kuponmaindiv");
kuponmaindiv.style.display="none";
var applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener('click',function(){
    var kuponInput = document.getElementById("kuponInput");
    var TOtalAMOUNT = document.getElementById("TOtalAMOUNT").innerHTML
    if(kuponInput.value=='-jahid-'){
        
        var total= parseInt(TOtalAMOUNT)-50;
        document.getElementById("TOtalAMOUNT").innerHTML=total;
        alert('Congratulation');
        kuponmaindiv.style.display="none";
    }
    else{
        alert('Kupon dose not match');
    }
});
