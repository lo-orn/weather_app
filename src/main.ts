import { createHtml } from './models/utils/createHtml';
import type { Weather } from './models/Weather';
import './style.css'

document.getElementById("searchForm")?.addEventListener("submit", async(e) => {
e.preventDefault();
const theInput = document.getElementById("searchText");
if(!theInput) return;

const searchText = (theInput as HTMLInputElement).value

const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bf2b03041f104e94b2b60321252412&q=${encodeURIComponent(searchText)}&aqi=no`
);
const data: Weather = await response.json();
console.log(data)
createHtml(data);


})

