import type { WeatherCondition } from "./WeatherCondition";

export type Current = {
    temp_c: number;
    condition: WeatherCondition;
    
}