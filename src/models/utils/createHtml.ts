import type { Weather } from "../Weather";
import { renderForecast } from "./forecastRender";
import { getWeatherQuote } from "./weatherQuote";



export const createHtml = (weather: Weather, days: Number) => {
    
const row = document.createElement("div")
row.className = " gap-8 mt-4";
const results = document.getElementById("results")
const quoteEl = document.getElementById("quote")


if(!results || !quoteEl ) return
results.innerHTML = "";

const locationHeader = document.getElementById("locationHeader") as HTMLHeadingElement | null
if(!locationHeader) return; 
locationHeader.innerHTML ="";
locationHeader.textContent = weather.location.name
results.parentElement?.insertBefore(locationHeader, results);

// if(days === 1) {
//     quoteEl.textContent = getWeatherQuote(
//         weather.current.condition.text,
//         weather.current.temp_c
//     )



quoteEl.textContent = getWeatherQuote(
    weather.forecast.forecastday[0].day.condition.text,
    weather.forecast.forecastday[0].day.avgtemp_c
  );




    
   
  renderForecast(weather.forecast.forecastday, results);

} 
