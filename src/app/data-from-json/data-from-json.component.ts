import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';
import { HandleCountriesService } from '../services/handle-countries.service';

@Component({
  selector: 'app-data-from-json',
  templateUrl: './data-from-json.component.html',
  styleUrls: ['./data-from-json.component.css']
})
export class DataFromJsonComponent implements OnInit {

  countries: Country[] = [];
  countriesReady: boolean = false;

  constructor(private handleCountriesService: HandleCountriesService) { 
    this.handleCountriesService.countries$.subscribe((dbcountries: Country[]) => {
          next:
          if(this.countries.length !== dbcountries.length) {
              this.countries = dbcountries;
            
          }
          
        })
        this.handleCountriesService.countriesReady$.subscribe((b: boolean) => {
          this.countriesReady = b;
          if(this.countriesReady) {
            console.log("countries: ", this.countries)
          }
        });

  }

  loadCountries() {
    this.handleCountriesService.loadCountries();
  }

  ngOnInit(): void {
    
    this.loadCountries();
   
  }

 
    
    
  

}