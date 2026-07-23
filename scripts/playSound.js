//const audioLaugh = document.getElementById("audio-laugh");
const audioExplosion = document.getElementById("audio-explosion");
const audioKnock = document.getElementById("audio-knock");

let arrayAudio = [audioKnock, audioExplosion];

/*
const timeMax4 = 63000
let randomTime4 = Math.floor(Math.random() * timeMax);
*/

let randomIndexAudio = Math.floor(Math.random() * arrayAudio.length);

async function playSound(){
    arrayAudio[randomIndexAudio].play();
}

setInterval(playSound, Math.floor(Math.random() * 65000));