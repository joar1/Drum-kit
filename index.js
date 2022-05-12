const clap = new Audio("Sounds/clap.wav");
const kick = new Audio("Sounds/kick.wav")
const hihat = new Audio("Sounds/hihat.wav")
const open = new Audio("Sounds/openhat.wav")
const ride = new Audio("Sounds/ride.wav")
const snare = new Audio("Sounds/snare.wav")
const tink = new Audio("Sounds/tink.wav")
const tom = new Audio("Sounds/tom.wav")


document.body.addEventListener("keydown", (e) =>{
   switch (e.key){
      case 'c':
         clap.currentTime = 0;
         clap.play();
         document.getElementById("clap").style.background="red";
         document.getElementById("clap").style.transform = "rotate(5deg)";
         break;
      case 'k':
         kick.currentTime = 0;
         kick.play();
         document.getElementById("kick").style.background="orange";
         document.getElementById("kick").style.transform = "rotate(5deg)";

         break;
      case 'h':
         hihat.currentTime = 0;
         hihat.play();
         document.getElementById("hihat").style.background="yellow";
         document.getElementById("hihat").style.transform = "rotate(5deg)";
         
         break;
      case 'o':
         open.currentTime = 0;
         open.play();
         document.getElementById("open").style.background="green";
         document.getElementById("open").style.transform = "rotate(5deg)";
         break;
      case 'r':
         ride.currentTime = 0;
         ride.play();
         document.getElementById("ride").style.background="blue";
         document.getElementById("ride").style.transform = "rotate(5deg)";
         break;
      case 's':
         snare.currentTime = 0;
         snare.play();
         document.getElementById("snare").style.background="indigo";
         document.getElementById("snare").style.transform = "rotate(5deg)";
         break;
      case 't':
         tink.currentTime = 0;
         tink.play();
         document.getElementById("tink").style.background="violet";
         document.getElementById("tink").style.transform = "rotate(5deg)";
         break;
      case 'm':
         tom.currentTime = 0;
         tom.play();
         document.getElementById("tom").style.background="purple";
         document.getElementById("tom").style.transform = "rotate(5deg)";
         break;
   }
})


// let sound2 = sound.cloneNode();
// sound.play();
// sound2.play();
