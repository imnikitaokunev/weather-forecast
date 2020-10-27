import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    public getCurrentWeather(city: string) {
        return this.http.get(
            `//api.openweathermap.org/data/2.5/forecast?id=524901&appid={YOUR OPENWEATHERMAP API KEY}&q=${city}`
        );
    }
}
