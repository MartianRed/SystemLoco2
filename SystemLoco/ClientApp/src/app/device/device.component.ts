import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {
  deviceList: any;
  urlDevices: string = 'https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices';

  constructor(private httpClient: HttpClient) {
    this.deviceList = [];
  }

  //Initialise and get devices
  ngOnInit() {
    this.getDeviceList();
  }

  //Get device list from API
  getDeviceList() {
    this.httpClient.get(this.urlDevices).subscribe((result: any) => {
      this.deviceList = result.body;
    });
  }
}
