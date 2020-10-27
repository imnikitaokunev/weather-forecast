import { WeatherService } from "./../../services/weather.service";
import { Component } from "@angular/core";

@Component({
    selector: "app-current-weather",
    templateUrl: "./current-weather.component.html",
})
export class CurrentWeatherComponent {
    public city = "Minsk";
    public country = "Belarus";

    public icon: string;
    public temperature: number;
    public description: string;
    public currentWeather: any;

    public isLoading = true;
    public date: number = Date.now();

    constructor(private weatherService: WeatherService) {
        setInterval(() => {
            this.date = Date.now();
        }, 1);

        this.weatherService.getCurrentWeather(this.city).subscribe((data: any) => {
            console.log(data);

            this.currentWeather = data.list[0];
            this.temperature = this.toCelsius(this.currentWeather.main.temp);
            this.icon = this.currentWeather.weather[0].icon;
            this.description = this.currentWeather.weather[0].description;

            this.isLoading = false;
        });
    }

    public toCelsius(kelvin: number) {
        return Math.floor(kelvin - 273.15);
    }
}
