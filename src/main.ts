import { createHtml } from './models/utils/createHtml';
import type { Weather } from './models/Weather';
import './style.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getDays = () => {
    const daysSelect = document.getElementById("daysSelect") as HTMLSelectElement
    if(!daysSelect) { return "3"}
    return daysSelect.value;
}

const fetchWeather = async(q: string) => {
    const days = getDays();
    const response = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
        q
      )}&days=${days}&aqi=no&alerts=no`);
const data = (await response.json()) as Weather;

createHtml(data)
console.log("API response:", data);
console.log("Days selected", days)
} 

//SEARCH
document.getElementById("searchForm")?.addEventListener("submit", async(e)=> {
    e.preventDefault();
    const input = document.getElementById("searchText") as HTMLInputElement
    if(!input) return;

    const searchText = input.value.trim();
    if(!searchText) return

    input.value= "";
    fetchWeather(searchText);

    console.log("Search", searchText)
    
});


//GEOLOCATION 

const locationBtn = document.getElementById("locationIcon") as HTMLImageElement
locationBtn.addEventListener("click", () => {
    if(!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude
            fetchWeather(`${lat},${lon}`)

    console.log("latitude", lat)
    console.log("longitude", lon)
        },
        () => alert("Could not get your location")
    );

    
})






