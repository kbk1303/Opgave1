import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root'
})
export class HandleCountriesService {
  countries$ : BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);
  countriesReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private countriesService: CountriesService) { }

  loadCountries()
  {
    let counts;
    this.countriesService.getCountries().subscribe((data: Country[]) => {
      next: 
      counts = data;

      complete:
      //console.log('complete called..')
      this.countries$.next(data);
      this.countriesReady$.next(true);
      //console.log("countries$", this.countries$.next.length);
     });
  }
}
