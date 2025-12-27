import type { ForecastDay } from "../Weather"


export const renderForecast = (
    days: ForecastDay[],
    container: HTMLElement
) => {

    days.forEach((day) => {
        const row = document.createElement("div")
        row.className = "w-full flex flex-row items-center justify-between gap-4 rounded-xl border px-4 py-3"
        const date = document.createElement("p")
        date.textContent = day.date
        date.className = "text-sm"

        const temp = document.createElement("p")
        temp.textContent = `${day.day.avgtemp_c}°C`
        temp.className = "text-sm"
       

        const condition = document.createElement("p")
        condition.textContent = day.day.condition.text
        condition.className = "text-sm"

        const icon = document.createElement("img")
        icon.src = day.day.condition.icon

        row.append(date, temp, condition, icon);

       
        container.appendChild(row);


    })
}