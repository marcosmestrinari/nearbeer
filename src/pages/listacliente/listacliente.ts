import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { ClientePage} from '../cliente/cliente'; 
import {Cliente} from '../../model/cliente';
import {ClienteEditarPage} from '../clienteeditar/clienteeditar';
//import {ClienteService} from '../../providers/cliente.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ListaclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listacliente',
  templateUrl: 'listacliente.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class ListaClientePage {

  public lista : Observable<Cliente[]>;
  itens:any;
  constructor(public db: AngularFirestore,
              public navCtrl: NavController,
              public afAuth: AngularFireAuth,
              public asCtrl: ActionSheetController) {
              let uid = afAuth.auth.currentUser.uid;
              this.lista = db
                .collection<Cliente>('clientes', ref => ref
                  .where('uid','==', uid))
                .valueChanges();       
               this.initializeItens();
      
  }


  public add() : void {
    this.navCtrl.push(ClientePage);
  }

  public logout() : void {
    this.afAuth.auth.signOut();
  }

  public gerenciar(id: string) : void {
    this.asCtrl.create({
      buttons: [
        {
          text: "Apagar",
          role: "destructive",
          handler: () => {
            this.db.doc("clientes/" + id).delete();
          }
        },
        {
          text: "Editar",
          handler: () => {
             this.navCtrl.push(ClienteEditarPage, {id: id});
          }
        },
        {
          text: "Cancelar",
          role:"cancel"
        }
      ]
    }).present();
  }



  initializeItens() {
    this.itens = this.lista;
    
  }

  getItens(ev: any) {
    // Reset items back to all of the items
    this.initializeItens();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }  

}
