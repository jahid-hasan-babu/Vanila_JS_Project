var add = document.getElementById("add");

add.addEventListener('click',function(){
    var OlItem = document.getElementById("OlItem");
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    var NewItem = document.createElement("li");
    NewItem.appendChild(text);
    OlItem.appendChild(NewItem);
});