const input = document.getElementById("input");
const btn = document.getElementById("btn");
const apikey = "e39e49ae777f50b8761af53c34a72124";
let apiurl = ``;

btn.addEventListener("click", function () {
  apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}`;
  data();
});

async function data() {
  const response = await fetch(apiurl + `&appid=${apikey}`);
  var d = await response.json();
  console.log(d);
  const temp = document.getElementById('temp');
  const city = document.getElementById('city');
  const humidity = document.getElementById('humidity');
  const windspeed = document.getElementById('windspeed');
  temp.innerHTML = Math.round(d.main.temp);
  city.innerHTML = d.name;
  windspeed.innerHTML = d.wind.speed + "km/h";
  humidity.innerHTML = d.main.humidity +"%";
}
