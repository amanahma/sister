var numberOfButton = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfButton; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    soundPlay(this.id);
    buttonAnimation(this.id);
  });
}

document.addEventListener("keypress", function (event) {
  soundPlay(event.key);
  buttonAnimation(event.key);
});

function soundPlay(buttonId){
  switch (buttonId) {
    case "A":
      var crash = new Audio('./sounds/Cornel___Rithika___Ride_it___Kya_Yehi_Pyar_Hai__Jay_Sean___Kizomba_fusion(360p)(1).mp3');
      crash.currentTime = 0;
      crash.play();
      break;
    case "M":
      var kickBass = new Audio('./sounds/Dilawara._2023__ringtone_download_links_in_👇(360p)(1).mp3');
      kickBass.currentTime = 0;   
      kickBass.play();
      break;
    case "a":
      var snare = new Audio('./sounds/labon_Ko_🖤lofi_WhatsApp_Status_✨🍂(1080p)~2(1).mp3');
      snare.currentTime = 0;
      snare.play();
      break;
    case "N":
      var tom1 = new Audio('./sounds/what_are_you_waiting_for___✨💞___love_me_like_you_do💖__couples_WhatsApp_status_✨(480p)(1).mp3');
      tom1.currentTime = 0;
      tom1.play();
      break;
    case "AA":
      var tom2 = new Audio('./sounds/Jo_bhi_jitne_pal_jiyu___Whatsapp_status___Dil_ibadat_song💫✨(720p)~2(1).mp3');
      tom2.currentTime = 0;
      tom2.play();
      break;
    case "H":
      var tom3 = new Audio('./sounds/Kaho_Na_Kaho_-_Emraan_Hashmi___Murder_Songs(256k).mp3');
      tom3.currentTime = 0;
      tom3.play();
      break;
    case "m":
      var tom4 = new Audio('./sounds/Wavy.mp3');
      tom4.currentTime = 0;
      tom4.play();
      break;
    case "D":
      var openhat = new Audio('./sounds/song.mp3');
      openhat.currentTime = 0;
      openhat.play();
      break;  
    case "S":
      var openhat = new Audio('./sounds/ringtone.mp3');
      openhat.currentTime = 0;
      openhat.play();
      break;
    case "R":
      var openhat = new Audio('./sounds/lagdi.mp3');
      openhat.currentTime = 0;
      openhat.play();
      break;
    default:
      console.log(buttonId);
  }   
}
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("#" + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}