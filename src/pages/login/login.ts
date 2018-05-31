import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistroPage } from '../registro/registro';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  // styleUrls: ['./login.scss']
})
export class LoginPage {

  constructor(private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {
  }


  public registrar(): void {
    this.navCtrl.push(RegistroPage);
  }              

  entrar(form: NgForm) {

    let email: string = form.value.email;
    let senha: string = form.value.senha;

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((user) => {
        this.navCtrl.setRoot(RegistroPage);
      })
      .catch((error) => {
        this.alertCtrl.create({
          title: "Falha na autenticação",
          subTitle: this.getMessage(error.code),
          buttons: ["OK"]
        }).present();
        
      });
  }

  private getMessage(code: string) : string {

    switch(code) {
      case "auth/invalid-email":
        return "E-mail mal formatado";
      
      case "auth/user-disabled":
        return "Usuário bloqueado.";           

      case "auth/user-not-found":
        return "Usuário não cadastrado";

      case "auth/wrong-password":
        return "Senha incorreta";
    }
  }

}
