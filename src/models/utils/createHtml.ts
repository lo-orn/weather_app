import type { Weather } from "../Weather";
import { renderForecast } from "./forecastRender";
import { getWeatherQuote } from "./weatherQuote";



export const createHtml = (weather: Weather) => {
    
    
const row = document.createElement("div")
row.className = " gap-8 mt-4";
const results = document.getElementById("results")
const quoteEl = document.getElementById("quote")


if(!results || !quoteEl ) return
results.innerHTML = "";

const locationHeader = document.getElementById("locationHeader")
if(!locationHeader) {
locationHeader.textContent = weather.location.name
results.parentElement?.insertBefore(locationHeader, results);

}


locationHeader.textContent = weather.location.name;

quoteEl.textContent = getWeatherQuote(
    weather.forecast.forecastday[0].day.condition.text,
    weather.forecast.forecastday[0].day.avgtemp_c
  );

    // 
    // locationHeader.textContent = weather.location.name
    // const currentText = document.createElement("p")
    // currentText.textContent = weather.current.condition.text
    // const temp = document.createElement("p")
    // temp.textContent = `${weather.current.temp_c}°C `
    // const icon = document.createElement("img")
    // icon.src = weather.current.condition.icon
    // icon.className ="w-10 h-10 inline-block align-middle"


    // row.append(locationHeader, currentText, temp, icon);
    // results.appendChild(row)
    
   
  renderForecast(weather.forecast.forecastday, results);

} 
