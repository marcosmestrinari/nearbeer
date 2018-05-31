import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, ActionSheetController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../../model/usuario';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioPage } from '../usuario/usuario';
import { NgForm } from '@angular/forms';



/**
 * Generated class for the UsuarioeditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-usuarioeditar',
  templateUrl: 'usuarioeditar.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class UsuarioEditarPage {
  usuarioRef: AngularFirestoreCollection<Usuario>;
  // usuarioRef: AngularFirestoreDocument<Usuario>;
  usuario$: Observable<Usuario[]>;
  // usuario$: Observable<Usuario[]>;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public db: AngularFirestore,
              public afAuth: AngularFireAuth,
              public asCtrl: ActionSheetController,
              private toast: ToastController) { 

              let uid = this.afAuth.auth.currentUser.uid;
              // this.usuarioRef = this.db.collection<Usuario>('usuarios');
              // this.usuarioRef = this.db.collection('usuarios');
              this.usuarioRef = this.db.collection('usuarios', ref => ref.where('id','==', uid));
              this.usuario$ = this.usuarioRef.valueChanges();

  }

  //  update(id: id) {
  //    this.usuarioRef.update(_usuario);
  //  }

  async salvar(form: NgForm) {

    let nome : string = form.value.nome;
    let email: string = form.value.email;

 

    let uid = await this.afAuth.auth.currentUser.uid;

    const obj = {
      'nome' : nome
    }

    //this.clienteService.create(cliente);
    // this.usuarioData.add(obj).then((_ref) => {
    //   this.db.doc("clientes/" + _ref.id).update({id: _ref.id})
    //   .then(() => {
    //     this.navCtrl.pop();
    //   });      
    // });
  }



  update(_usuario) {

    this.db.doc('usuarios/'+this.afAuth.auth.currentUser.uid).update({
      nome: _usuario.nome,
    }).then(() => {
        this.toast.create({
          message: `Atualizado com Sucesso `,
          duration:5000
        }).present();
        this.viewCtrl.dismiss(UsuarioPage);
    })
  }


  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid ){
        this.toast.create({
          message: `Perfil de usuários - [Edição] `,
          duration:5000
        }).present();
      }
    })
  }
  //  ngOnInit() {
  //  }

}