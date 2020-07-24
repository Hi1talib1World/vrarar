import { Component } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world weather map';
  latitude = 51.678418;
  longitude = 7.809007;

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

  }

  onToggleClick(open){
    myTest();

  }

}
