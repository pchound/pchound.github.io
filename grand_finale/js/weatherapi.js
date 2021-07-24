let cityID = 5604473;
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







  const apiURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=41.3072&lon=-111.9602&units=imperial&appid=${appid}`;
  fetch(apiURL2)
    .then((response2) => response2.json())
    .then((jsObject2) => {
      console.log(jsObject2);

      //document.getElementById('alert').textContent = jsObject2.alerts.description;

      document.getElementById('currently').textContent = jsObject2.daily[0].temp.day.toFixed(0);
      document.getElementById('condition').textContent = jsObject2.current.weather[0].description;
      document.getElementById('humidity').textContent = jsObject2.current.humidity;

      document.getElementById('forecast1').textContent = jsObject2.daily[1].temp.day.toFixed(0);
      document.getElementById('forecast2').textContent = jsObject2.daily[2].temp.day.toFixed(0);
      document.getElementById('forecast3').textContent = jsObject2.daily[3].temp.day.toFixed(0);
  
      /*let day = 1;
      const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      document.getElementById(`dayofweek${day}`).textContent = dayofWeek[d.getDay()];*/
    });

