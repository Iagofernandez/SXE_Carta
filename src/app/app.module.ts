import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { CartaComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { UsersComponent } from './users/users/users.component';
//
@NgModule({
  declarations: [
    CartaComponent,
    UsersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule

    ],
  providers: [],
  bootstrap: [CartaComponent]
})
export class AppModule { }
