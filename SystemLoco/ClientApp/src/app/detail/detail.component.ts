import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  deviceDetails: any = [];
  deviceId?: string = '';
  urlDetails: string = 'https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  //Initialise and get the passed id param
  ngOnInit() {
    this.deviceId = this.route.snapshot.paramMap.get('id')?.toString();
    this.getDetails();
  }

  //Get the details of the device
  getDetails() {
    this.httpClient.get(this.urlDetails + this.deviceId).subscribe((result: any) => {
      this.deviceDetails = result; 
    })
  }
}
