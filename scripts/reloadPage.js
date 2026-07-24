
/*
const timeMax = 63000
let randomTime = Math.floor(Math.random() * timeMax);
*/
//let randTimeReload = randomTime();

function reloadPage() {
    window.location.reload();
}

setInterval(reloadPage, Math.floor(Math.random() * 65000));