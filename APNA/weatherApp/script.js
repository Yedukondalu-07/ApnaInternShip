const inputText = document.querySelector(".inputText")
const searchButton = document.querySelector(".searchButton")
const bottomCard = document.querySelector(".results")
const apiKey = "0a6c8a2274a39607ecafbf65ca3d8894"


searchButton.addEventListener("click", async event => {

    const enteredCity = inputText.value;
    inputText.value = "";

    if(enteredCity){
        try{
            const weatherData = await getWeatherData(enteredCity);
            displayWeatherInfo(weatherData)

        }catch(err){
            console.error(err)
            displayError(err)
        }

    }else{
        displayError("Please Enter a city")
    }
})

async function getWeatherData(enteredCity){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}`;

    const res = await fetch(apiUrl);

    if (!res.ok){
        throw new Error("OOPs Could not fetch weather data");
    }

    return await res.json()
}

function displayWeatherInfo(data){

    const {name: enteredCity, 
            main: {temp, humidity}, 
            weather: [{main, id}], 
            wind: {speed}} = data;
    bottomCard.textContent = "";
    bottomCard.style.display = "flex";

    const city = document.createElement("h1")
    const temparature = document.createElement("p")
    const humiditi = document.createElement("p")
    const description = document.createElement("p")
    const weatherEmoji = document.createElement("p")
    const windSpeed = document.createElement("p")

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weather-emoji")

    city.textContent = enteredCity;
    city.classList.add("city");

    temparature.textContent = `${Math.round(temp - 273.15)}°C`;
    temparature.classList.add("temparature");

    humiditi.textContent = `Humidity: ${humidity}%`;
    humiditi.classList.add("humidity");

    description.textContent = main;
    description.classList.add("description");

    windSpeed.textContent = `Wind Speed: ${speed} KM/H`;
    windSpeed.classList.add("windSpeed")

    bottomCard.appendChild(weatherEmoji);
    bottomCard.appendChild(city);
    bottomCard.appendChild(temparature);
    bottomCard.appendChild(humiditi);
    bottomCard.appendChild(description);
    bottomCard.appendChild(windSpeed)
}

function getWeatherEmoji(weatherId) {
    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈"
        case(weatherId >= 300 && weatherId < 400):
            return "⛈"
        case(weatherId >= 500 && weatherId < 600):
            return "🌧"
        case(weatherId >= 600 && weatherId < 700):
            return "❄️"
        case(weatherId >= 700 && weatherId < 800):
            return "⛅"
        case(weatherId == 800):
            return "☀️"
        case(weatherId >= 801 && weatherId < 810):
            return "☁️"
        default:
            return "❓"
    }
}

function displayError(message) {
    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("error");

    bottomCard.textContent = "";
    bottomCard.style.display = "flex";
    bottomCard.appendChild(error);
}

