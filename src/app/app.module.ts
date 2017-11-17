import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NotificationDetailPage } from '../pages/notification-detail/notification-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NotificationsService } from '../services/notifications.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
		NotificationsPage,
		NotificationDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
		NotificationsPage,
		NotificationDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		NotificationsService
  ]
})
export class AppModule {}
