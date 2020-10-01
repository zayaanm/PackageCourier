import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete-address',
  templateUrl: './autocomplete-address.component.html',
  styleUrls: ['./autocomplete-address.component.css']
})
export class AutocompleteAddressComponent {

  @Input() placeholder:string = ""
  address:string = ""
  @Output() addressChange = new EventEmitter()
  
  options = {
    componentRestrictions:{
      country:['CA']
    }
  }

  public AddressChange(address: any){
    this.addressChange.emit(address.formatted_address)
  }
}
