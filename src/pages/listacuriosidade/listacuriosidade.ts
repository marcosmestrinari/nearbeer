import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Curiosiade } from '../../model/curiosidade';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Cliente } from '../../model/cliente';
import { CuriosidadePage } from '../curiosidade/curiosidade';

/**
 * Generated class for the ListacuriosidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listacuriosidade',
  templateUrl: 'listacuriosidade.html',
})
export class ListacuriosidadePage {

  public lista : Observable<Curiosiade[]>;
  itens:any;
  constructor(public db: AngularFirestore,
              public navCtrl: NavController,
              public afAuth: AngularFireAuth,
              public asCtrl: ActionSheetController) {
              let uid = afAuth.auth.currentUser.uid;
              this.lista = db
                .collection<Curiosiade>('curiosidades')
                .valueChanges();       
               this.initializeItens();
      
  }


  // public add() : void {
  //   this.navCtrl.push(ClientePage);
  // }

  public logout() : void {
    this.afAuth.auth.signOut();
  }

  public detalhar(id: string) : void {
    
      this.navCtrl.push(CuriosidadePage, {id: id});

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
