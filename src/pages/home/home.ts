import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SorteioPage } from '../sorteio/sorteio';
import { ListaClientePage } from '../listacliente/listacliente';
import { UsuarioPage } from '../usuario/usuario';
import { MenuSorteioPage } from '../menusorteio/menusorteio';
import { MapaPage } from '../mapa/mapa';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../model/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { CuriosidadePage } from '../curiosidade/curiosidade';
import { ListacuriosidadePage } from '../listacuriosidade/listacuriosidade';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class HomePage {
  
  usuarioRef: AngularFirestoreCollection<Usuario>;
  // usuarioRef: AngularFirestoreDocument<Usuario>;
  usuario$: Observable<Usuario[]>;

  constructor(public navCtrl: NavController,
              public afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public db: AngularFirestore) {
    let uid = this.afAuth.auth.currentUser.uid;
    // this.usuarioRef = this.db.collection<Usuario>('usuarios');
    // this.usuarioRef = this.db.collection('usuarios');
    this.usuarioRef = this.db.collection('usuarios', ref => ref.where('id','==', uid));
    this.usuario$ = this.usuarioRef.valueChanges(); 
  }
  abrirListaSoreio(){
    this.navCtrl.push(SorteioPage);
  }
  abrirCliente() {
    this.navCtrl.push(ListaClientePage);
  }
  abrirMapa() {
    this.navCtrl.push(MapaPage);
  }
  abrirPerfil() {
    this.navCtrl.push(UsuarioPage);
  }
  meuSorteio() {
    this.navCtrl.push(MenuSorteioPage);
  }
  abrirCuriosidades() {
    this.navCtrl.push(ListacuriosidadePage);
  }
}
