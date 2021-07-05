const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
      fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const events = jsonObject['events'];
      
for (let i = 0; i < towns.length; i++) {
    if (towns[i].name === "Soda Springs"){
        /*let event = document.createElement('div')
        event.className = "event";*/

        
        //event_li.className = "event_li";

        
        
       
          let event_li0 = document.createElement('li');
          event_li0.innerHTML = `${towns[i].events[0]}`;
          event_li0.className = "event_li0";
        

          let event_li1 = document.createElement('li');
          event_li1.innerHTML = `${towns[i].events[1]}`;
          event_li1.className = "event_li1";

          let event_li2 = document.createElement('li');
          event_li2.innerHTML = `${towns[i].events[2]}`;
          event_li2.className = "event_li2";
        
       

        document.querySelector('ul.region_event_text').append(event_li0);
        document.querySelector('ul.region_event_text').append(event_li1);
        document.querySelector('ul.region_event_text').append(event_li2);
        
    }
}
});
      