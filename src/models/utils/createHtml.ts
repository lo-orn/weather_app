import type { Weather } from "../Weather";
import { getWeatherQuote } from "./weatherQuote";

export const createHtml = (weather: Weather) => {

const results = document.getElementById("results")
const quoteEl = document.getElementById("quote")

if(!results || !quoteEl) return
results.innerHTML = "";

quoteEl.textContent = getWeatherQuote(
    weather.current.condition.text,
    weather.current.temp_c
)

    const locationHeader = document.createElement("h2")
    locationHeader.textContent = weather.location.name
    const currentText = document.createElement("p")
    currentText.textContent = weather.current.condition.text
    const temp = document.createElement("p")
    temp.textContent = `${weather.current.temp_c}°C `


results.append(locationHeader, currentText, temp)
   
}