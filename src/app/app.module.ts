import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './comps/home/home.component';
import { AboutComponent } from './comps/about/about.component';
import { VehiclesComponent } from './comps/vehicles/vehicles.component';
import { ServicesComponent } from './comps/home/services/services.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { VehicleDetailComponent } from './comps/vehicles/vehicle-detail/vehicle-detail.component';
import { FinancingComponent } from './comps/financing/financing.component';
import { NegotiatepriceComponent } from './comps/vehicles/vehicle-detail/negotiateprice/negotiateprice.component';
import { ContactComponent } from './comps/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    VehiclesComponent,
    ServicesComponent,
    FooterComponent,
    VehicleDetailComponent,
    FinancingComponent,
    NegotiatepriceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
