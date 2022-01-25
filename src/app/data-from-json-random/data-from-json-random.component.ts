import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-data-from-json-random',
  templateUrl: './data-from-json-random.component.html',
  styleUrls: ['./data-from-json-random.component.css']
})
export class DataFromJsonRandomComponent implements OnInit {

  countries: Country[] = [];
  randCountry$: Subject<Country> = new Subject<Country>();
  randCountry : Country = {} as Country;

  constructor(private countriesService: CountriesService) { 
    
  }


  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((data: Country[]) => {
      next: this.countries = data;
    });
    setInterval(() => {
      this.getRandomCountry();
      this.randCountry$.subscribe((c: Country) => {this.randCountry = c});
    }, 3000);
  }

  getRandomCountry() {
    //console.log("next called...")
    let c: Country[] = [];
    let s  = new Subject<Country>();
    this.countriesService.getCountries().subscribe((data: Country[]) => {
      next: c = data;
      complete: 
      if(c[0] !== undefined) {
        this.randCountry$.next(c[Math.floor(Math.random()*c.length)]);
      }
    });
  }
}
