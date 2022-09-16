import { ApiService } from './api.service';
import { Component} from '@angular/core';
import {Map} from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iptracker';

  showDisplay = false

  constructor(private Api:ApiService) {}

  ipData:any
  
  getIP() {
    this.Api.get().subscribe((ip) => {
      this.ipData = ip
      this.showDisplay = true
      console.log(this.ipData);
    })
  }

 
  
}
