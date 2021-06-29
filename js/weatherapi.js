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
      

      //Work in progress
      //let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';  // note the concatenation
      //document.getElementById(`icon${day}`).setAttribute('src', imagesrc);
      day++

      /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);*/
    });


  });


  