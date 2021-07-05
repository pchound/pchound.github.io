let cityID = 5607916;
let appid = 'e116f1daaa18ec188a8f9cad320d03eb';
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let day = 1;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fiveDayforecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('12:00:00'));   
    console.log(fiveDayforecast);
    
    fiveDayforecast.forEach( x => {
      
      let d = new Date(x.dt_txt);
      
      console.log(x);

      document.getElementById(`dayofweek${day}`).textContent = dayofWeek[d.getDay()];
      document.getElementById(`forecast${day}`).textContent = x.main.temp.toFixed(0);
      
      let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';  // note the concatenation
      document.getElementById(`icon${day}`).setAttribute('src', imagesrc);

      let desc = x.weather[0].description;
      document.getElementById(`icon${day}`).setAttribute('alt', desc);
      day++;
      

    });
  

  });


const apiURL2 = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&APPID=${appid}`;
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);
    const desc = jsObject2.weather[0].description;  
    document.getElementById('currently').innerHTML = desc;
    document.getElementById('temp_high').textContent = jsObject2.main.temp_max.toFixed(0);
    document.getElementById('temp_low').textContent = jsObject2.main.temp_min.toFixed(0);
    //Wind chill is still only calculated by me
    document.getElementById('humidity').textContent = jsObject2.main.humidity;
    document.getElementById('wind_speed').textContent = jsObject2.wind.speed.toFixed(0);
    

 //Wind Chill   

  let temperature_text = document.getElementById('temp_high').innerText.match(/\d+/)[0];
  let windspeed_text = document.getElementById('wind_speed').innerText.match(/\d+/)[0];


  let t = parseFloat(temperature_text);
  let s = parseFloat(windspeed_text);

if (t <= 50){

  let result = windChill(t, s).toFixed(0) + "&deg; F";
  document.getElementById('wind_chill').innerHTML = result;
}

else{
  let result = "N/A"
  document.getElementById('wind_chill').innerHTML = result;
}

  function windChill(t, s)
  {
      let formula = (35.74 + (0.6215 * t) - 35.75 * (s ** 0.16) + (0.4275 * t) * (s ** 0.16))
      return formula;
  }

  

  });


  