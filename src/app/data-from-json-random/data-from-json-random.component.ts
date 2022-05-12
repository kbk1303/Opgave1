import { HttpClient } from '@angular/common/http';
import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Country } from '../interfaces/country';
import { WsTest } from '../interfaces/ws-test';
import { CountriesService } from '../services/countries.service';
import { HandleCountriesService } from '../services/handle-countries.service';

@Component({
  selector: 'app-data-from-json-random',
  templateUrl: './data-from-json-random.component.html',
  styleUrls: ['./data-from-json-random.component.css']
})
export class DataFromJsonRandomComponent implements OnInit, OnDestroy {

  randCountry : Country = {} as Country;
  countriesReady: boolean = false;
  countries$: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([] as Country[])
  id: number = 0;

  subject$: WebSocketSubject<WsTest> = webSocket("ws://localhost:7071");
  n$: BehaviorSubject<Country> = new BehaviorSubject<Country>({} as Country);

  constructor(private handler: HandleCountriesService) { 
    let countries;
    this.handler.countries$.subscribe((data: Country[]) => {
      next:
        countries = data;
      complete:
        this.countries$.next(countries);
    });

    countries = this.countries$.next;

    this.subject$.asObservable().subscribe((msg: WsTest) => {
      next: {
        console.log('message received: ' + msg.id + ' ' + msg.country.name)
        if(this.id ==0) {
          this.id = msg.id;
        }
        if(this.id == msg.id) {
          this.randCountry = msg.country;
          this.countriesReady = true;
          this.n$.next(this.randCountry);
        }
      } // Called whenever there is a message from the server.
      error: {
        (err: any) => console.log(err);
        //this.countriesReady = false;
      }
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });

  }
  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }


  ngOnInit(): void {
  }

}
