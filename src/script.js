async function getWeather(lat, lon) {
    const url = `http://api.weatherapi.com/v1/current.json?key=bbcd6df96dd44e51bba201926212207&q=${lat},${lon}`
    const result = await (await fetch(url)).json();
    return result;
}

async function updateWeather(weather) {
    document.querySelector('#temp').textContent = weather.current.temp_f;
    document.querySelector('#location').textContent = weather.location.name;
    document.querySelector('#country').textContent = weather.location.country;
    document.querySelector('#condition-icon').src = weather.current.condition.icon;
}

document.querySelector('#form').addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const lat = document.querySelector('#lat').value || 0;
    const lon = document.querySelector('#lon').value || 0;
    const weather = await getWeather(lat, lon);
    updateWeather(weather);
})

async function getUserDeviceLocation() {
    const geoLoc = navigator.geolocation;
    geoLoc.getCurrentPosition(async (pos) => {
        const coordinates = pos.coords;
        const weather = await getWeather(coordinates.latitude, coordinates.longitude);
        updateWeather(weather);
    });
}

getUserDeviceLocation();
