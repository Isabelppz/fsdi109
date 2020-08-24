import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// couldnt import firebase , following the instructions
//these are the credentials to firebase project
/*   var fbConfig = {
  apiKey:"AIzaSyCm4T_OMPKbaVWLyRzxh3532AivwXvmsE8",
  authDomain:"fsdi-6aa30.firebaseapp.com",
  databaseURL:"https://fsdi-b5fb0.firebaseio.com",
  projectId:"fsdi-b5fb0",
  storageBucket:'fsdi-b5fb0.appspot.com',
  messagingSenderId:"707152100183"
};
 */
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
