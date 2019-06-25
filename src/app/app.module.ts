import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaidListComponent } from './views/maid-list/maid-list.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSelectModule, MatStepperModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import {MenageService} from './shared/services/menage.service';
import {HttpClientModule} from '@angular/common/http';
import { PlanificationComponent } from './views/planification/planification.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MapComponent } from './views/map/map.component';
import {AgmCoreModule} from '@agm/core';
import { FooterComponent } from './shared/components/footer/footer.component';
import {NguCarouselModule} from '@ngu/carousel';
import {VisiteService} from './shared/services/visite.service';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import { VisiteListComponent } from './views/visite-list/visite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MaidListComponent,
    HeaderComponent,
    PlanificationComponent,
    MapComponent,
    FooterComponent,
    VisiteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrHj-fQEK6E-0AQPAv1AJe3xEjplzHYe0'
    }),
    NguCarouselModule,
    AmazingTimePickerModule,
    MatStepperModule,
    MatDividerModule
  ],
  providers: [MenageService, VisiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
