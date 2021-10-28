document.addEventListener("DOMContentLoaded", () => {
   
  
    const updateTemperature = () => {
      document.querySelector('#temperature').innerText = thermostat.getCurrentTemperature();
      document.querySelector('#temperature').className = thermostat.energyUsage();
    }

    const thermostat = new Thermostat();
    updateTemperature();
  
    document.querySelector('#temperature').addEventListener('click', () => {
      getCurrentTemperature()
      updateTemperature();
    });

    document.querySelector('#temperature-up').addEventListener('click', () => {
      thermostat.up();
      updateTemperature();
    });
  
    document.querySelector('#temperature-down').addEventListener('click', () => {
      thermostat.down();
      updateTemperature();
    });
    document.querySelector('#temperature-reset').addEventListener('click', () => {
        thermostat.resetTemperature();
        updateTemperature();
      });
      document.querySelector('#powersaving-on').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOn();
        document.querySelector('#power-saving-status').innerText = 'on!';
        updateTemperature();
      })


        document.querySelector('#powersaving-off').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOff();
        document.querySelector('#power-saving-status').innerText = 'off!';
        updateTemperature();
        })

        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
        .then((response) => {
         return response.json()
        })
        .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
        });

        const selectElement = document.querySelector('#current-city');
        selectElement.addEventListener('change', (event) => {
          const city = event.target.value;
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
        
          fetch(url)
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              document.querySelector('#current-temperature').innerText = data.main.temp;
            })
   });
        
    


            

       

       

        
});    

