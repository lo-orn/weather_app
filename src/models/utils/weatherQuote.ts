export const getWeatherQuote = (condition: string, temp: number) : string => {
    const c = condition.toLocaleLowerCase();

    if(temp <= 0 ) {
        return "Brr it's freezing outside, cozy up with a hot drink!🥶"

    }

    if (c.includes("rain")) {
        return "Rainy days are perfect for slowing down.🌧️"

    }

    if (c.includes("cloud")) {
        return "Cloudy days are perfect for poetry! ☁️"

    }

    if (c.includes("wind")) {

        return "Hold on to your hat, it's windy out there!💨"

    }

    if( temp >= 20 && c.includes("sun")) {

        return "Sun's out today, get your butt out and enjoy it while it lasts! 😎"

    }

    if(temp >= 10 && temp < 20) {

        return "Lovely weather, perfect for a walk!🚶🏽"

    }

    return "Another day, another forecast! ⛅️"
}