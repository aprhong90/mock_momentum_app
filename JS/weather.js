const API_KEY = "ba051ce2906efd5a16bf51a48a686ee9";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const cityName = document.querySelector("#weather div:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      cityName.innerText = `${data.name}`;
    })
  );
}
function onGeoErr() {
  "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
