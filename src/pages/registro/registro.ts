import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
  // styleUrls: ['../assets/css/estilo.css']
})
export class RegistroPage {

  constructor(private afAuth: AngularFireAuth,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private db: AngularFirestore) {
            }



 
  public registrar(form: NgForm) : void {

    let id:  any;
    let nome:  string = form.value.nome;
    let email: string = form.value.email;
    let senha: string = form.value.senha;
    let codigo: number = Math.floor(Math.random()*1000)+1;
    let adm: boolean = false;


    let foto: string = "https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/logo%2FLogo.png?alt=media&token=4dadc6c0-d480-41d7-97a9-90224a0cf612";

    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        this.db.collection('usuarios').doc(user.uid).set({
          id: user.uid,
          nome: nome,
          email: email,
          codigo: codigo,
          sorteado:'',
          adm:false,
          foto: foto
        });
      })
      .catch((error) => {
        this.alertCtrl.create({
          title: 'Erro no registro',
          subTitle : error.message,
          buttons: ["Ok"]
        }).present()
      });
  }
  


}
