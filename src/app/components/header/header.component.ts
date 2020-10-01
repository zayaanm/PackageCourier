import { Component } from '@angular/core';
import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  origin:string
  destination:string

  originReceived($event){
    this.origin = $event
  }

  destinationReceived($event){
    this.destination = $event
    }

}
