import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { BachilleratoPage } from '../pages/bachillerato/bachillerato';
import { LibroPage } from '../pages/libro/libro';
import { VistaGeneralPage } from '../pages/vista-general/vista-general';
import { InfoPage } from '../pages/info/info';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BachilleratoPage,
    LibroPage,
    VistaGeneralPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BachilleratoPage,
    LibroPage,
    VistaGeneralPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    DocumentViewer,
    FileTransfer
  ]
})
export class AppModule {}
