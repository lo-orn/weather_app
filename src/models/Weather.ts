export type Weather = {
    location: {
      name: string;
      lat: number;
      lon: number
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    forecast: {
      forecastday: ForecastDay[];
    };
  };
  
  export type ForecastDay = {
    date: string;
    day: {
      avgtemp_c: number;
      mintemp_c: number;
      maxtemp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  };