let temperature_text = document.getElementById('temperature').innerText.match(/\d+/)[0];

let windspeed_text = document.getElementById('wind_speed').innerText.match(/\d+/)[0];


let t = parseFloat(temperature_text);
let s = parseFloat(windspeed_text);

let result = windChill(t, s).toFixed(0);
document.getElementById('wind_chill').innerHTML = result;

function windChill(t, s)
{
    let formula = (35.74 + (0.6215 * t) - 35.75 * (s ** 0.16) + (0.4275 * t) * (s ** 0.16))
    return formula;
}