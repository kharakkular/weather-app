

fetch('http://api.weatherapi.com/v1/current.json?key=bbcd6df96dd44e51bba201926212207&q=paris').then(
    data => {
        data.json().then(
            displayWeather
        )
    }
);

function displayWeather (weather) {
  document.querySelector('#temp').textContent = weather.current.temp_f;
}