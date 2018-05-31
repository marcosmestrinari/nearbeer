import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class ClientePage {

  public ref: AngularFirestoreCollection<any>;
  
  constructor(public db: AngularFirestore,
              public navCtrl: NavController,
              public afAuth: AngularFireAuth) {
              this.ref = db.collection('clientes');
  }


  async salvar(form: NgForm) {

    let nome : string = form.value.nome;
    let email: string = form.value.email;
    let endereco: string = form.value.endereco;
    let status: string = form.value.status;

     let uid = await this.afAuth.auth.currentUser.uid;

    const obj = {
      'nome' : nome,
      'email' : email,
      'endereco' : endereco,
      'status' : status,
      'uid': uid
    }

    //this.clienteService.create(cliente);
    this.ref.add(obj).then((_ref) => {
      this.db.doc("clientes/" + _ref.id).update({id: _ref.id})
      .then(() => {
        this.navCtrl.pop();
      });      
    });
  }


}
