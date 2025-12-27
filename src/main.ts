import { createHtml } from './models/utils/createHtml';
import type { Weather } from './models/Weather';
import './style.css'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY



console.log(import.meta.env.VITE_WEATHER_API_KEY)
document.getElementById("searchForm")?.addEventListener("submit", async(e) => {
e.preventDefault();
const theInput = document.getElementById("searchText") as HTMLInputElement;
const daysSelect = document.getElementById("daysSelect") as HTMLSelectElement
if(!theInput || !daysSelect) return;

const days = daysSelect.value;


const searchText = (theInput as HTMLInputElement).value
theInput.value = "";


const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(searchText)}&days=${days}&aqi=no&alerts=no`
);
const data: Weather = await response.json();
console.log("days returned:", data.forecast?.forecastday?.length);
console.log(data)
createHtml(data);


})

