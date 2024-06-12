
let weatherData = document.getElementById("weather-data");
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let apiKey = "";
//key : "be607e4d34d34d62245fbc94660be4df"

searchButton.addEventListener("click", fetchWeatherData);

function fetchWeatherData(){
    let city = searchInput.value;
    if (city) {
        //fetching data
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`)
        //checking the response
        .then(response => {
            if( !response.ok){
                alert("City not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            //using DOM to show the weather information 
            weatherData.innerHTML = `Place : ${data.name} <br>
            The Temperature: ${data.main.temp}°C <br>
            The Max Temperature : ${data.main.temp_max}°C <br>
            The Temperature feels like : ${data.main.feels_like}°C <br>
            The Weather : ${data.weather[0].description} <br>
            The Speed of Wind : ${data.wind.speed} `;
            weatherData.style.backgroundColor = 'transparent';
            weatherData.style.color = 'black';
            weatherData.style.fontSize = '50px';
            weatherData.style.alignItems = 'center';
            weatherData.style.paddingTop = '75px';
        })
        //handling errors
        .catch(error => console.error("Error:", error));
    }
    else{
        alert("Please enter a city name");
    }
}
