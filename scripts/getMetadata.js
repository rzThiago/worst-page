/*
console.log("Buscador: " + navigator.appName);
console.log("Sistema Operativo: " + navigator.platform);
*/
/*
const urlApi = 'https://ipapi.co/json/';

async function getLocation() {
  let data = fetch(urlApi, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(response => response.json())
    .catch(error => console.error("Error: ", error))
  //const data = await response.json();
  return data;
}
*/
/*
const timeMax6 = 65000
const randomTime6 = Math.floor(Math.random() * timeMax);
*/
const audioLaugh = document.getElementById("audio-laugh");
const anuncioData = document.getElementById("anuncio-data");
navigator.geolocation.getCurrentPosition(displayAnounce);

async function displayAnounce(position){
  anuncioData.innerHTML = `<h1>CONFIRM IF THIS CORRECT</h1>
  <p>Navigator: ${navigator.appName}</p>
  <p>Operating System: ${navigator.platform}</p>
  <p>Latitude: ${position.coords.latitude}</p>
  <p>Longitude: ${position.coords.longitude}</p>
  <button id="btn-anuncio" type="button" onclick="ocultarAnuncio()">Confirm</button>`;
  audioLaugh.play();
  anuncioData.style.visibility = "visible";
}

setInterval(displayAnounce, Math.floor(Math.random() * 65000));