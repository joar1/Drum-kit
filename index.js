/*
Getting the drum soundbites.
*/
const clap = new Audio("Sounds/clap.wav");
const kick = new Audio("Sounds/kick.wav")
const hihat = new Audio("Sounds/hihat.wav")
const open = new Audio("Sounds/openhat.wav")
const ride = new Audio("Sounds/ride.wav")
const snare = new Audio("Sounds/snare.wav")
const tink = new Audio("Sounds/tink.wav")
const tom = new Audio("Sounds/tom.wav")

/*
addEventListener that responds to keydown changing the background color
and making the buttons move.
*/
document.body.addEventListener("keydown", (e) =>{
   switch (e.key){
      case 'c':
         clap.currentTime = 0;
         clap.play();
         document.getElementById("clap").style.background="red";
         document.getElementById("clap").style.transform="rotate(10deg)";
         break;
      case 'k':
         kick.currentTime = 0;
         kick.play();
         document.getElementById("kick").style.background="orange";
         document.getElementById("kick").style.transform="rotate(10deg)";

         break;
      case 'h':
         hihat.currentTime = 0;
         hihat.play();
         document.getElementById("hihat").style.background="yellow";
         document.getElementById("hihat").style.transform="rotate(10deg)";
         
         break;
      case 'o':
         open.currentTime = 0;
         open.play();
         document.getElementById("open").style.background="green";
         document.getElementById("open").style.transform="rotate(10deg)";
         break;
      case 'r':
         ride.currentTime = 0;
         ride.play();
         document.getElementById("ride").style.background="blue";
         document.getElementById("ride").style.transform="rotate(10deg)";
         break;
      case 's':
         snare.currentTime = 0;
         snare.play();
         document.getElementById("snare").style.background="indigo";
         document.getElementById("snare").style.transform="rotate(10deg)";
         break;
      case 't':
         tink.currentTime = 0;
         tink.play();
         document.getElementById("tink").style.background="violet";
         document.getElementById("tink").style.transform="rotate(10deg)";
         break;
      case 'm':
         tom.currentTime = 0;
         tom.play();
         document.getElementById("tom").style.background="purple";
         document.getElementById("tom").style.transform="rotate(10deg)";
         break;
   }
})

/*
addEventListener that responds to keyup, basically a reverse of the keydown above,
reverting the code back to "start". Should probably have made a function.
*/
document.body.addEventListener("keyup", (e) =>{
   switch (e.key){
      case 'c':
         document.getElementById("clap").style.background="beige";
         document.getElementById("clap").style.transform="rotate(0deg)";
         break;
      case 'k':
         document.getElementById("kick").style.background="beige";
         document.getElementById("kick").style.transform="rotate(0deg)";
         break;
      case 'h':
         document.getElementById("hihat").style.background="beige";
         document.getElementById("hihat").style.transform="rotate(0deg)";
         break;
      case 'o':
         document.getElementById("open").style.background="beige";
         document.getElementById("open").style.transform="rotate(0deg)";
         break;
      case 'r':
         document.getElementById("ride").style.background="beige";
         document.getElementById("ride").style.transform="rotate(0deg)";
         break;
      case 's':
         document.getElementById("snare").style.background="beige";
         document.getElementById("snare").style.transform="rotate(0deg)";
         break;
      case 't':
         document.getElementById("tink").style.background="beige";
         document.getElementById("tink").style.transform="rotate(0deg)";
         break;
      case 'm':
         document.getElementById("tom").style.background="beige";
         document.getElementById("tom").style.transform="rotate(0deg)";
         break;
   }
})