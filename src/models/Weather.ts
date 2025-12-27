import type { Current } from "./Current";
import type  { Location } from "./Location"

export type Weather = {
    location: Location;
    current: Current;
}