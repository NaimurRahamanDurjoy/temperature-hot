const apiKey = 'e3408a5b4f266319f2eb24a3f8163fcf';
const searchTemperature = () => {
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // Remove search field
    searchField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

// code optimization
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
  /*   
    // Tag Location
    const city = document.getElementById('city-name');
    const temperatureTag = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    // Update data in Tag
    city.innerText = temperature.name;
    temperatureTag.innerText = temperature.main.temp;
    condition.innerText = temperature.weather[0].main;
 */

    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // Weather icon
    const imgIcon = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const img = document.getElementById('weather-icon');
    img.setAttribute('src', imgIcon);
}