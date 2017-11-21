import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotificationsPage } from '../pages/notifications/notifications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NotificationsService } from '../services/notifications.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyADrMElmZMclE24bjbcfUos5775eZhNO48",
  authDomain: "hey-28cfc.firebaseapp.com",
  databaseURL: "https://hey-28cfc.firebaseio.com",
  storageBucket: "hey-28cfc.appspot.com",
  messagingSenderId: '640232701107'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
		NotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
		NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		NotificationsService
  ]
})
export class AppModule {}
