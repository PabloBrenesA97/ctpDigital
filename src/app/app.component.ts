import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BachilleratoPage } from '../pages/bachillerato/bachillerato';
import { LibroPage } from '../pages/libro/libro';
import { timer } from 'rxjs/observable/timer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  bachillerato = BachilleratoPage;
  principal = HomePage;
  libros = LibroPage;
  showSplash = true; // <-- show animation
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }

  abrirPagina( pagina: any ){
    this.rootPage = pagina; // Cambia la pagina de root seleccionada
    this.menuCtrl.close();
  }


}

