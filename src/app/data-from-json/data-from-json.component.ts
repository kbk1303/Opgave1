import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-data-from-json',
  templateUrl: './data-from-json.component.html',
  styleUrls: ['./data-from-json.component.css']
})
export class DataFromJsonComponent implements OnInit {

  countries: Country[] = [];


  constructor(private countriesService: CountriesService) { 
 
  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((data: Country[]) => {
      next: this.countries = data;
    });
  }

 
    
    
  

}