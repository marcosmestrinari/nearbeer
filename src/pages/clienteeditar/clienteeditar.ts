import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../model/cliente';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaClientePage } from '../listacliente/listacliente';



/**
 * Generated class for the ClienteeditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clienteeditar',
  templateUrl: 'clienteeditar.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class ClienteEditarPage {

  // public ref: AngularFirestoreCollection<any>;
  clienteRef: AngularFirestoreCollection<Cliente>;
  cliente$: Observable<Cliente[]>;

  constructor(public db: AngularFirestore,
              public navCtrl: NavController,
              public afAuth: AngularFireAuth,
              private toast: ToastController,
              public viewCtrl: ViewController,
              private navParams: NavParams ) {

              let uid = afAuth.auth.currentUser.uid;

              let id = navParams.get('id');

              this.clienteRef = db.collection('clientes', ref => ref
          .where('id','==', id))
              this.cliente$ = this.clienteRef.valueChanges();
     }

    update(_cliente) {

      this.db.doc('clientes/'+_cliente.id).update({
        nome: _cliente.nome,
        email: _cliente.email,
        endereco: _cliente.endereco,
        status: _cliente.status
      }).then(() => {
          this.toast.create({
            message: `Atualizado com Sucesso `,
            duration:5000
          }).present();
          this.viewCtrl.dismiss(ListaClientePage);
      })
    }

  // async salvar(form: NgForm) {

  //   let nome : string = form.value.nome;
  //   let email: string = form.value.email;

  //   let cliente: Cliente = new Cliente(nome, email);

  //   let uid = await this.afAuth.auth.currentUser.uid;

  //   const obj = {
  //     'nome' : nome,
  //     'email' : email,
  //     'uid': uid
  //   }

  //   //this.clienteService.create(cliente);
  //   // this.ref.add(obj).then((_ref) => {
  //   //   this.db.doc("clientes/" + _ref.id).update({id: _ref.id})
  //   //   .then(() => {
  //   //     this.navCtrl.pop();
  //   //   });      
  //   // });
  // }

}