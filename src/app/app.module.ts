import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CurrentWeatherComponent } from "./components/current-weather/current-weather.component";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, CurrentWeatherComponent],
    imports: [BrowserModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
