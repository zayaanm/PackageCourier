import { BrowserModule } from '@angular/platform-browser';

// Handles Bootstrap implementation
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Handles autocomplete form
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'

// Handles the map
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteractiveMapComponent } from './components/header/interactive-map/interactive-map.component';
import { AutocompleteAddressComponent } from './components/header/autocomplete-address/autocomplete-address.component';
import { environment } from 'src/environments/environment';
import { InfoBlockComponent } from './components/info/info-block/info-block.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    NavbarComponent,
    InteractiveMapComponent,
    AutocompleteAddressComponent,
    InfoBlockComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    }),
    AgmDirectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
