const API_KEY = `c358bf781f62b99bc3b7cc27e2394099`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => dispayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}
const dispayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp-metric', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
    // console.log(temperature);
}