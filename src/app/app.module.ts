import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  firebase  from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyAcoRwwgoxt9E6BD8f7mwJheR3NHRJNsgg",
  authDomain: "sharednotes-1f6fc.firebaseapp.com",
  databaseURL: "https://sharednotes-1f6fc.firebaseio.com",
  projectId: "sharednotes-1f6fc",
  storageBucket: "sharednotes-1f6fc.appspot.com",
  messagingSenderId: "623426986090"
});
@NgModule({
  
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
