let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(controlIcon.classList.contains("fa-solid fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-solid fa-pause");
        controlIcon.classList.add("fa-solid fa-play");
    }
    else{
      song.play();
      controlIcon.classList.add("fa-solid fa-pause");
      controlIcon.classList.remove("fa-solid fa-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}