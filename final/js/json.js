
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

              let article_grid = document.createElement('article');
              article_grid.className = "article_grid";

              let both_data = document.createElement('both_data');
              both_data.className = "both_data";

              let data = document.createElement('div');
              data.className = "data";


            article_grid.innerHTML = ``;
            img.setAttribute('src', `images/towns/${towns[i].photo}`);
            img.setAttribute('alt', `${towns[i].name}`);
            h2.innerHTML = `${towns[i].name}`;
            description.innerHTML = `${towns[i].motto}<br><br>`;

            year_founded.innerHTML = `Year founded: ${towns[i].yearFounded}`;
            population.innerHTML = `Current population: ${towns[i].currentPopulation}`;
            rain_fall.innerHTML = `Annual Rainfall: ${towns[i].averageRainfall}`;

            town.append(article_grid);
            article_grid.append(img);
            article_grid.append(data);

            
            data.append(h2);
            data.append(description);
            data.append(year_founded);
            data.append(population);
            data.append(rain_fall);

            document.querySelector('div.towns').append(town);
        }
      }
      });