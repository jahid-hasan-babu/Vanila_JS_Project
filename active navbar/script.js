var Item = document.querySelectorAll('a');
var CurrentLocation = location.href;

for(var i=0; i<Item.length; i++){
    if(Item[i].href==CurrentLocation){
        Item[i].className="active"
    }
}