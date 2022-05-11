import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  content: string;
  nord: string;
  pollution: string;
  nordVille1: string;
  nordVille2: string;
  nordVille3: string;
  nordWeather1: string;
  nordWeather2: string;
  nordWeather3: string;
  nordTemp1: string;
  nordTemp2: string;
  nordTemp3: string;
  nordWind1: string;
  nordWind2: string;
  nordWind3: string;

  sudVille1: string;
  sudVille2: string;
  sudVille3: string;
  sudWeather1: string;
  sudWeather2: string;
  sudWeather3: string;
  sudTemp1: string;
  sudTemp2: string;
  sudTemp3: string;
  sudWind1: string;
  sudWind2: string;
  sudWind3: string;

  estVille1: string;
  estVille2: string;
  estVille3: string;
  estWeather1: string;
  estWeather2: string;
  estWeather3: string;
  estTemp1: string;
  estTemp2: string;
  estTemp3: string;
  estWind1: string;
  estWind2: string;
  estWind3: string;

  ouestVille1: string;
  ouestVille2: string;
  ouestVille3: string;
  ouestWeather1: string;
  ouestWeather2: string;
  ouestWeather3: string;
  ouestTemp1: string;
  ouestTemp2: string;
  ouestTemp3: string;
  ouestWind1: string;
  ouestWind2: string;
  ouestWind3: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getNord().subscribe((data) => {
      this.nordVille1 = data[0].name;
      this.nordWeather1 = data[0].weather[0].description;
      this.nordTemp1 = data[0].main.temp;
      this.nordWind1 = data[0].wind.speed;
      this.nordVille2 = data[1].name;
      this.nordWeather2 = data[1].weather[0].description;
      this.nordTemp2 = data[1].main.temp;
      this.nordWind2 = data[1].wind.speed;
      this.nordVille3 = data[2].name;
      this.nordWeather3 = data[2].weather[0].description;
      this.nordTemp3 = data[2].main.temp;
      this.nordWind3 = data[2].wind.speed;
    });
    this.userService.getSud().subscribe((data) => {
      this.sudVille1 = data[0].name;
      this.sudWeather1 = data[0].weather[0].description;
      this.sudTemp1 = data[0].main.temp;
      this.sudWind1 = data[0].wind.speed;
      this.sudVille2 = data[1].name;
      this.sudWeather2 = data[1].weather[0].description;
      this.sudTemp2 = data[1].main.temp;
      this.sudWind2 = data[1].wind.speed;
      this.sudVille3 = data[2].name;
      this.sudWeather3 = data[2].weather[0].description;
      this.sudTemp3 = data[2].main.temp;
      this.sudWind3 = data[2].wind.speed;
    });
    this.userService.getEst().subscribe((data) => {
      this.estVille1 = data[0].name;
      this.estWeather1 = data[0].weather[0].description;
      this.estTemp1 = data[0].main.temp;
      this.estWind1 = data[0].wind.speed;
      this.estVille2 = data[1].name;
      this.estWeather2 = data[1].weather[0].description;
      this.estTemp2 = data[1].main.temp;
      this.estWind2 = data[1].wind.speed;
      this.estVille3 = data[2].name;
      this.estWeather3 = data[2].weather[0].description;
      this.estTemp3 = data[2].main.temp;
      this.estWind3 = data[2].wind.speed;
    });
    this.userService.getOuest().subscribe((data) => {
      this.ouestVille1 = data[0].name;
      this.ouestWeather1 = data[0].weather[0].description;
      this.ouestTemp1 = data[0].main.temp;
      this.ouestWind1 = data[0].wind.speed;
      this.ouestVille2 = data[1].name;
      this.ouestWeather2 = data[1].weather[0].description;
      this.ouestTemp2 = data[1].main.temp;
      this.ouestWind2 = data[1].wind.speed;
      this.ouestVille3 = data[2].name;
      this.ouestWeather3 = data[2].weather[0].description;
      this.ouestTemp3 = data[2].main.temp;
      this.ouestWind3 = data[2].wind.speed;
    });
    this.userService.getPollution().subscribe((data) => {
      this.pollution = data.list[0].main.aqi;
    });
  }
}
