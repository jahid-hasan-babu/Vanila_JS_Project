var Title = document.getElementById('Title');

window.addEventListener('online',set);//document.body use korte pari but aita te refresh dite hobe
window.addEventListener('offline',set);

function set(){
    if(navigator.onLine){
        Title.innerHTML="You are online"
        Title.style.color="blue"
    }
    else{
        Title.innerHTML="You are offline"
        Title.style.color="red"
    }
}
set();
