const body = document.querySelector("body");

/*
const timeMax3 = 65000
const randomTime3 = Math.floor(Math.random() * timeMax);
*/
function setBackgroundColors(){
    if(Math.random() > 0.4){
        body.style.animation = "backgroundColors 2s infinite";
    } else{
        body.style.animation = "backgroundBlackWhite 2s infinite";
    }
}

setInterval(setBackgroundColors, Math.floor(Math.random() * 65000));