const songlist = [
  ["September", "Earth, Wind & Fire", "https://github.com/snipchu/codefiles/raw/main/2024/7_11_24/September.mp3"],
  ["Harvey","Her's","https://github.com/snipchu/codefiles/raw/main/2024/7_11_24/Harvey.mp3"],
  ["Spunky (Makoto's Stage)","Hideki Okugawa","https://github.com/snipchu/codefiles/raw/main/2024/7_11_24/Spunky.mp3"],
  ["Get Down On It", "Kool & The Gang", "https://github.com/snipchu/codefiles/raw/main/2024/7_11_24/GetDownOnIt.mp3"]
]
songindex = 0;

function toggleplay() {
  mp3audio = document.getElementById("mp3audio");
  mp3playbutton = document.querySelector(".mp3playbutton");
  mp3audio.paused ? mp3playbutton.classList.replace("nf-fa-play", "nf-fa-pause") : mp3playbutton.classList.replace("nf-fa-pause", "nf-fa-play");
  mp3audio.paused ? mp3audio.play() : mp3audio.pause();
}
function toggleloop() {
  mp3loopbutton = document.getElementById("mp3playerbottom").querySelector(".mp3loopbutton");
  mp3audio.loop = !(mp3audio.loop);
  mp3audio.loop ? mp3loopbutton.classList.replace("nf-md-repeat","nf-md-repeat_once") : mp3loopbutton.classList.replace("nf-md-repeat_once","nf-md-repeat");
}
shuffled = false;
function toggleshuffle() { 
  shuffled = !shuffled;
  mp3shuffle = document.getElementById("mp3playerbottom").querySelector(".nf-md-shuffle");
  shuffled ? mp3shuffle.style.color = "#0099ff" : mp3shuffle.style.color = "white";
}
function changevol(amount) {
  mp3audio.volume += amount;
  mp3playerbottom = document.getElementById("mp3playerbottom");
  mp3volume = mp3audio.volume.toFixed(2)*100;
  mp3playerbottom.firstElementChild.lastElementChild.innerHTML = mp3volume+"%";
  mp3playerbottom.firstElementChild.firstElementChild.style.clipPath = "polygon(0 0, "+mp3volume+"% 0%, "+mp3volume+"% 100%, 0% 100%)";
}
function numtotime(num) {
  return Math.floor(num/60)+":"+String(Math.floor(num%60)).padStart(2,"0");
}
function progbarupdate() {
  progbar = document.getElementById("progbar");
  progbar.value = mp3audio.currentTime/mp3audio.duration * 100;
  progbar.nextElementSibling.firstElementChild.innerHTML = numtotime(mp3audio.currentTime);
}

function changesong(index) {
  // play next song
  mp3src = document.getElementById("mp3src");
  !shuffled ? songindex += index : songindex = Math.floor(Math.random()*songlist.length);
  if (songindex == songlist.length) {songindex = 0;}
  if (songindex == -1) {songindex = songlist.length-1;}
  mp3src.src = songlist[songindex][2];
  mp3audio.load();

  // update html after audio loads
  mp3audio.onloadedmetadata = function() {
    if (index != 0) { mp3audio.play(); }
    mp3playermain = document.getElementById("mp3playermain");
    mp3audio.previousElementSibling.innerHTML = songlist[songindex][1];
    mp3playermain.firstElementChild.innerHTML = songlist[songindex][0];
    progbar.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = (songindex+1)+"/"+(songlist.length);
    progbar.nextElementSibling.lastElementChild.innerHTML = numtotime(mp3audio.duration);
    progbarupdate();
  };
}

function updatetime() {
  mp3playertop = document.getElementById("mp3playertop");
  todaysdate = new Date();
  mp3playertop.firstElementChild.innerHTML = (todaysdate.getMonth()+1)+"/"+String(todaysdate.getDate()).padStart(2, "0")+"/"+todaysdate.getFullYear();
  mp3playertop.firstElementChild.nextElementSibling.innerHTML = String(todaysdate.getHours()).padStart(2,"0")+":"+String(todaysdate.getMinutes()).padStart(2,"0");
}
setInterval(updatetime, 1000);
