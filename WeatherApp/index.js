let inputRef = document.querySelector('.input-search input');
let searchBtn = document.querySelector('.input-search .fa-magnifying-glass');
let tempRef = document.querySelector('.weatherCondition-icon .temp');
let imgRef = document.querySelector('.icon img');
let conditionRef = document.querySelector('.icon span');
let locationRef = document.querySelector('.location-time h1');
let timeStamp = document.querySelector('.location-time span');


function renderWeatherData(weatherData){
    tempRef.innerHTML = weatherData.current.temp_c +"°c";
    imgRef.src = weatherData.current.condition.icon;
    conditionRef.innerHTML =  weatherData.current.condition.text;
    locationRef.innerHTML = weatherData.location.name;
    timeStamp.innerHTML = formatTimestamp(weatherData.current.last_updated);
}

function formatTimestamp(time){
    const timeArray = time.split(' ');

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const d = new Date(timeArray[0]);
    let day = weekday[d.getDay()];
    
    console.log(day);
    const result = timeArray[1] + ' ' + day + ' ' + timeArray[0];
    return result;
}

if(searchBtn.addEventListener("click", (e)=>{
    const inputValue = inputRef.value.trim();
    console.log(inputValue);
    fetchWeatherData(inputValue);
}));
else
{
    fetchWeatherData("New Delhi");
}

function fetchWeatherData(locationName){
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${locationName}`)
    .then((res) => res.json())
    .then((data) => renderWeatherData(data))
    .catch((err) => console.log("Error", err));
}

