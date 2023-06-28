import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Device } from '../models/device';
import { Details } from '../models/details';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private urlDevices = 'https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices';
  private urlDetails = '';

  //httpOptions = {
  //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //};


  constructor(
    private http: HttpClient) { }

  //getDevices() {
  //  return this.httpClient.get(this.urlDevices);
  //}

  getDevices(): Observable<Device[]> {


    return this.http.get<Device[]>('https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices');

      }

    //return this.http.get<any>(this.urlDevices)
    //        .pipe(
    //  tap(_ => console.log('fetched heroes'))
    //);
    //return this.http.get('https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices').subscribe(result: any));

  //}





  //getDeviceDetails() {
  //  return this.httpClient.get(this.urlDetails);
  //}

}

