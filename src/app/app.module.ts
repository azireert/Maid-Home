import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaidListComponent } from './views/maid-list/maid-list.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule,
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
import { DialogMenageComponent } from './views/visite-list/dialog-menage/dialog-menage.component';
import { AuthComponent } from './views/auth/auth.component';
import { RegisterComponent } from './views/register/register.component';
import {UtilisateurService} from './shared/services/utilisateur.service';

@NgModule({
  declarations: [
    AppComponent,
    MaidListComponent,
    HeaderComponent,
    PlanificationComponent,
    MapComponent,
    FooterComponent,
    VisiteListComponent,
    DialogMenageComponent,
    AuthComponent,
    RegisterComponent
  ],
  entryComponents: [
    DialogMenageComponent
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
      apiKey: ''
    }),
    NguCarouselModule,
    AmazingTimePickerModule,
    MatStepperModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [MenageService, VisiteService, UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
