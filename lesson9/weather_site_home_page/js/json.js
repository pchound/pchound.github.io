//const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-town.json';
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
      fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
    
        for (let i = 0; i < towns.length; i++ ) {
          if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven"){

            let town = document.createElement('section');
            town.className = "town";
            
            let h2 = document.createElement('h2');

            let img = document.createElement('img');
            img.className = "home_img";

            let description = document.createElement('p');
            description.className = "description";

              let year_founded = document.createElement('p');
              year_founded.className = "year_founded";

              let population = document.createElement('p');
              population.className = "population";

              let rain_fall = document.createElement('p');
              rain_fall.className = "rain_fall";


            
            img.setAttribute('src', `images/towns/${towns[i].photo}`);
            img.setAttribute('alt', `${towns[i].name}`);
            h2.innerHTML = `<div id ="info">${towns[i].name}`;
            description.innerHTML = `${towns[i].motto}<br><br>`;

            year_founded.innerHTML = `Year founded: ${towns[i].yearFounded}`;
            population.innerHTML = `Current population: ${towns[i].currentPopulation}`;
            rain_fall.innerHTML = `Annual Rainfall: ${towns[i].averageRainfall}</div>`;

            town.append(img);
            town.append(h2);
            town.append(description);
            town.append(year_founded);
            town.append(population);
            town.append(rain_fall);

            document.querySelector('div.towns').append(town);
        }
      }
      });