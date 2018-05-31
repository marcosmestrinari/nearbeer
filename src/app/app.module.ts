import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente';
import { ClienteEditarPage } from '../pages/clienteeditar/clienteeditar';
import { ListaClientePage } from '../pages/listacliente/listacliente';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { MenuPage } from '../pages/menu/menu';
import { MenuSorteioPage } from '../pages/menusorteio/menusorteio';
import { RegistroPage } from '../pages/registro/registro';
import { SorteioPage } from '../pages/sorteio/sorteio';
import { UsuarioPage } from '../pages/usuario/usuario';
import { UsuarioEditarPage } from '../pages/usuarioeditar/usuarioeditar';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation'; 

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CuriosidadePage } from '../pages/curiosidade/curiosidade';
import { ListacuriosidadePage } from '../pages/listacuriosidade/listacuriosidade';

const config = {
  apiKey: "AIzaSyC8WE9iYb6oH3uoi1N8hq2F_dd5eVVCr24",
  authDomain: "nearbeer-b5c74.firebaseapp.com",
  databaseURL: "https://nearbeer-b5c74.firebaseio.com",
  projectId: "nearbeer-b5c74",
  storageBucket: "nearbeer-b5c74.appspot.com",
  messagingSenderId: "661589353570"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    ClienteEditarPage,
    ListaClientePage,
    LoginPage,
    MapaPage,
    MenuPage,
    MenuSorteioPage,
    RegistroPage,
    SorteioPage,
    UsuarioPage,
    UsuarioEditarPage,
    MenuSorteioPage,
    CuriosidadePage,
    ListacuriosidadePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    ClienteEditarPage,
    ListaClientePage,
    LoginPage,
    MapaPage,
    MenuPage,
    MenuSorteioPage,
    RegistroPage,
    SorteioPage,
    UsuarioPage,
    UsuarioEditarPage,
    MenuSorteioPage,
    CuriosidadePage,
    ListacuriosidadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
