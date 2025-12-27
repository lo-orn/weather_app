import type { Weather } from "../Weather";
import { getWeatherQuote } from "./weatherQuote";

export const createHtml = (weather: Weather) => {
    
const row = document.createElement("div")
row.className = "flex items-center justify-center gap-8 mt-4";
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
    const icon = document.createElement("img")
    icon.src = weather.current.condition.icon
    icon.className ="w-10 h-10 inline-block align-middle"


    row.append(locationHeader, currentText, temp, icon);
    results.appendChild(row)
   
}