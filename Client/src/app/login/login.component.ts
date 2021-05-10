import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { BlogDto } from '../generated/blogger_pb';
import { WeatherData } from '../generated/weather_forecast_pb';
import { BloggerService } from '../services/blogger.service';
import { WeatherForecastService } from '../services/weather-forecast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public response!: Observable<BlogDto.AsObject[]> | Observable<WeatherData.AsObject>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient,
    private _bloggerService: BloggerService,
    private _weatherForecastService: WeatherForecastService
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getWeatherStream(): void {
    this.response = this._weatherForecastService.getWeatherStream();
  }

  getBlogs(count: number): void {
    this.response = this._bloggerService.getBlogs(count);
  }

  logOut() {
    this.authService.logout();
  }
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.ngOnInit();
      },
    );
  }
}
