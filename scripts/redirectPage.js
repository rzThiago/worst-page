const LINK1 = "https://youtu.be/Jk71bPz5VLo?si=YYqso_X-RCcRaLfp";
const LINK2 = "https://www.linkedin.com/in/thiago-rodriguez-2ba096287";
const LINK3 = "https://www.youtube.com/watch?v=qjwjMA2SIFs&t=2173s";
const LINK4 = "https://www.ed-wood.net/";
const LINK5 = "/index.html";
const LINK6 = "https://arngren.net/"

const linkArray = [LINK1, LINK2, LINK3, LINK4, LINK5, LINK6];

/*
const timeMax2 = 65000
const randomTime2 = Math.floor(Math.random() * timeMax);
*/
//let randTimeRedirect = randomTime();
let randomIndexLink = Math.floor(Math.random() * linkArray.length);


function redirectPage() {
    window.location.href = linkArray[randomIndexLink];
}

setInterval(redirectPage, Math.floor(Math.random() * 65000));

