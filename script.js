function getWeather(){

    const apiKey='6367b0560a8c14ff025f5a1cb45801f9';
    const city = document.getElementById('city').value;

   if (typeof city== 'number'){
    const zip =document.getElementbyId('city').value;
    const country =document.getElementbyId('city').value;
    const zipWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}`;
    fetch(zipWeatherUrl)
   .then(response=>response.json())
   .then(data=>{
    console.log (data)
          displayWeather(data);
   })
   .catch(error=>{
    console.error("Error fetching current weather data", error);
    alert("Error fetching current weather data.Please try again. ");
   });
   }else{

    const currentWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    

   fetch(currentWeatherUrl)
   .then(response=>response.json())
   .then(data=>{
    console.log (data)
          displayWeather(data);
   })
   .catch(error=>{
    console.error("Error fetching current weather data", error);
    alert("Error fetching current weather data.Please try again. ");
   });

 } 
}

function displayWeather(data){
    const cityDivInfo=document.getElementById('city-name');
    const tempDivInfo=document.getElementById('temp-div');
    const weatherInfoDiv=document.getElementById('weather-info');
    const weatherIcon=document.getElementById('weather-icon');
    const humidityDivInfo=document.getElementById('humidity-info');
    const windDivInfo=document.getElementById('wind-info');

    cityDivInfo.innerHTML='';
    weatherInfoDiv.innerHTML='';
    tempDivInfo.innerHTML='';
    humidityDivInfo.innerHTML='';
    windDivInfo.innerHTML='';




    if (data.cod=='404'){
        weatherInfoDiv.innerHTML=`<p>${data.message}</p>`;
    }else{
        const cityName=data.name;
        const countryName=data.sys.country;
        const temperature=Math.round(data.main.temp-273.15);
        const description=data.weather[0].description;
        const humidity=data.main.humidity;
        const wind_speed=data.wind.speed;
        const iconCode=data.weather[0].icon;
        const iconUrl=`https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const cityHTML=
        `<p>${cityName}, ${countryName}  </p> `;
        const temperatureHTML=
        `<p>  ${temperature}°C  </p>`;
        const humidityHTML=
        `<p>humidity:  ${humidity} %  </p>`;
        const windHTML=
        `<p>wind speed:  ${wind_speed} m/s </p>`;
        const weatherHTML=
        `<p>  ${description}  </p> `;
    

        cityDivInfo.innerHTML= cityHTML;
        tempDivInfo.innerHTML= temperatureHTML;
        humidityDivInfo.innerHTML= humidityHTML;
        windDivInfo.innerHTML=windHTML;
        weatherInfoDiv.innerHTML= weatherHTML;
        weatherIcon.src=iconUrl;
        weatherIcon.alt=description;

        showImage();

    }
}

function showImage(){
    const weatherIcon=document.getElementById('weather-icon');
    weatherIcon.style.display='block';
}