import { HttpClient } from '@angular/common/http';
import { CompileTemplateMetadata, ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
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

  randCountry$ : Subject<Country> = new Subject<Country>();
  id: number = 0;
  subject$: WebSocketSubject<WsTest> = webSocket("ws://localhost:7071");

  constructor(private handler: HandleCountriesService) { 

    this.subject$.subscribe((msg: WsTest) => {
      next: {
        console.log('message received: ' + msg.id + ' ' + msg.country.name)
        if(this.id ==0) {
          this.id = msg.id;
        }
        if(this.id == msg.id) {
          this.randCountry$.next(msg.country);
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
