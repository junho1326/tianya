import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';

//***********  Angularfire2 v4 **************/

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicImageViewerModule } from 'ionic-img-viewer';


import { Geolocation } from '@ionic-native/geolocation';


import { LoadingProvider } from '../providers/loading/loading';
import { LoginProvider } from '../providers/auth/login';
import { LogoutProvider } from '../providers/auth/logout';
import { AlertProvider } from '../providers/alert/alert';
import { DataProvider } from '../providers/data/data';
import { ImageProvider } from '../providers/data/image';
import { RequestProvider } from '../providers/data/request';





// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

//********** firebase configuration  ************ */
export const config = { 
  apiKey: "AIzaSyBMzRAvkAHvHtKzgrFaQhbEYeQwjhksqGw",
  authDomain: "test-1994test.firebaseapp.com",
  databaseURL: "https://test-1994test.firebaseio.com",
  projectId: "test-1994test",
  storageBucket: "test-1994test.appspot.com",
  messagingSenderId: "1045281213826"
  
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, {
      //modalEnter: 'modal-slide-in',
      //modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      //pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicImageViewerModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Network,
    Geolocation,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireDatabase,
   
    InAppBrowser,
    LoadingProvider,
    LoginProvider,
    LogoutProvider,
    AlertProvider,
    DataProvider,
    ImageProvider,
    RequestProvider

 
  ]
})
export class AppModule { }
