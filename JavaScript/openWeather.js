//declare variables and assign page elements & input from form
// let input = document.querySelector("document.title");

let input = document.title
let main = document.querySelector("#name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let button = document.querySelector(".submit");
let icon = document.querySelector(".img-container");

// getting weather

function getWeather () {
  //API call
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f342a8977e982afc539caeb496c17f9e&units=metric`
  )
    .then((response) => response.json()) //returning the json feed containing the data
    .then((data) => {
      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];
      let iconCode = data.weather[0].icon;

      main.innerHTML = nameValue;
      desc.innerHTML = `${descValue}`;
      temp.innerHTML = `${tempValue} &#8451;`;
      icon.innerHTML = `<img src=http://openweathermap.org/img/wn/${iconCode}@2x.png>`;
    })
    .catch((err) => alert("Can not get current weather forecast."));
};

// on window load, run a search for current weather
window.onload = getWeather();
