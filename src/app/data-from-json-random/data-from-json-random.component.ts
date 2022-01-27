import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';
import { HandleCountriesService } from '../services/handle-countries.service';

@Component({
  selector: 'app-data-from-json-random',
  templateUrl: './data-from-json-random.component.html',
  styleUrls: ['./data-from-json-random.component.css']
})
export class DataFromJsonRandomComponent implements OnInit {

  countries: Country[] = [];
  countriesReady: boolean = false;
  randCountry$: Subject<Country> = new Subject<Country>();
  randCountry : Country = {} as Country;

  constructor(private handleCountriesService: HandleCountriesService) { 
    handleCountriesService.countriesReady$.subscribe((b: boolean) => {
      if(this.countriesReady !== b) {
        this.countriesReady = b;
      } 
    })
  }


  ngOnInit(): void {
    this.handleCountriesService.loadCountries();
    this.handleCountriesService.countries$.subscribe((data: Country[]) => {
      next: 
      if(this.countries.length !== data.length && this.countriesReady){
        this.countries = data;
      }

    });
    setInterval(() => {
      this.getRandomCountry();
      this.randCountry$.subscribe((c: Country) => {this.randCountry = c});
    }, 3000);
  }

  getRandomCountry() {
    //console.log("next called...")
    let c: Country[] = [];
    this.handleCountriesService.countries$.subscribe((data: Country[]) => {
      next: 
      if(c.length !== data.length && this.countriesReady){
        c = data;
      }
      complete: 
      if(c[0] !== undefined) {
        this.randCountry$.next(c[Math.floor(Math.random()*c.length)]);
      }
    });
  }
}
