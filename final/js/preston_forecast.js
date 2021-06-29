
let cityID = 5604473;
let appid = 'e116f1daaa18ec188a8f9cad320d03eb';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&APPID=${appid}`;
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e116f1daaa18ec188a8f9cad320d03eb";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp;
    //const temperature = jsObject.weather[0].description;  // note how we reference the weather array

  });