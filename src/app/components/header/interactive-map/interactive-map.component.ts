import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit{
  @Input() origin:string
  @Input() destination:string

  ngOnInit(){
    this.getUserLocation();
  }

  lat:any
  lng:any

  getUserLocation() {
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;
       });
    }
  }

  onMapReady(map?: google.maps.Map ){
    if(map)
     map.setOptions({
        streetViewControl: false,
        fullscreenControl: false
    });
  }
}
