import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaClientePage } from '../listacliente/listacliente';
import { MapaPage } from '../mapa/mapa';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../../model/usuario';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class MenuPage {
  rootPage = HomePage;

  usuarioRef: AngularFirestoreCollection<Usuario>;
  // usuarioRef: AngularFirestoreDocument<Usuario>;
  usuario$: Observable<Usuario[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public db: AngularFirestore) {
              let uid = this.afAuth.auth.currentUser.uid;
              // this.usuarioRef = this.db.collection<Usuario>('usuarios');
              // this.usuarioRef = this.db.collection('usuarios');
              this.usuarioRef = this.db.collection('usuarios', ref => ref.where('id','==', uid));
              this.usuario$ = this.usuarioRef.valueChanges();  
             
  }



  abrirCliente() {
    this.navCtrl.push(ListaClientePage);
  }

  abrirHome() {
    this.navCtrl.push(HomePage)
  }

   abrirMapa(){
     this.navCtrl.push(MapaPage);
   }

  logoff() {

    this.afAuth.auth.signOut().then(() => {
      // let alert = this.alertCtrl.create({
      //   title: 'Aviso!!!',
      //   subTitle: '<br>Logoff Efetuado com Sucesso!!!',
      //   buttons: ['Ok']
      // });
      // alert.present();
      // this.navCtrl.push(LoginComponent);
    })


  }




}
