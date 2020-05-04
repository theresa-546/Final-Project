//audio
var audio = document.getElementById("music");
audio.volume = 0.2;

function start_scroll_down() {
   scroll = setInterval(function(){ window.scrollBy(0, 1); console.log('start');}, 2);
}

function stop_scroll_down() {
   clearInterval(scroll);
   console.log('stop');}

start_scroll_down();
