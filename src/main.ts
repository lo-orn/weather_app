import { createHtml } from './models/utils/createHtml';
import type { Weather } from './models/Weather';
import './style.css'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

console.log(import.meta.env.VITE_WEATHER_API_KEY)
document.getElementById("searchForm")?.addEventListener("submit", async(e) => {
e.preventDefault();
const theInput = document.getElementById("searchText");
if(!theInput) return;

const searchText = (theInput as HTMLInputElement).value

const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(searchText)}&aqi=no`
);
const data: Weather = await response.json();
console.log(data)
createHtml(data);


})

