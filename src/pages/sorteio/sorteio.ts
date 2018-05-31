import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController, ToastController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../../model/usuario';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { UsuarioEditarPage } from '../usuarioeditar/usuarioeditar';

/**
 * Generated class for the SorteioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sorteio',
  templateUrl: 'sorteio.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class SorteioPage {
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
              this.usuarioRef = this.db.collection('usuarios');
              this.usuario$ = this.usuarioRef.valueChanges();
              var sorteio =  Math.floor((Math.random()*6)+1);
  }


  sorteadoS(_usuario){
    
    
    this.db.doc('usuarios/'+_usuario.id).update({
      sorteado: 'sim',
    }).then(() => {
        this.toast.create({
          message: `Atualizado com Sucesso `,
          duration:5000
        }).present();
    // this.viewCtrl.dismiss(UsuarioComponent);
    })
  }

    sorteadoN(_usuario){
    
    this.db.doc('usuarios/'+_usuario.id).update({
      sorteado: '',
    }).then(() => {
        this.toast.create({
          message: `Atualizado com Sucesso `,
          duration:5000
        }).present();
    // this.viewCtrl.dismiss(UsuarioComponent);
    })
  }

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
              this.navCtrl.push(UsuarioEditarPage, {id: id});
           }
         },
         {
           text: "Cancelar",
           role:"cancel"
         }
       ]
     }).present();
   }


  ionViewWillLoad(){
    // alert(this.afAuth.auth.currentUser.uid);
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid ){
        this.toast.create({
          message: `Sorteio `,
          duration:5000
        }).present();

       
        
      }
    })
  }
  //  ngOnInit() {
  //  }


}
