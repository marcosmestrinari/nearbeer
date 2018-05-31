import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      afAuth.authState.subscribe((auth) => {
        if(auth == null) {
          this.rootPage = LoginPage;            
        }
        else {
          this.rootPage = MenuPage;
        }
      })
    });
  }
}
