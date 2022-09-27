import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CredenciaisDTO } from '../../models/credentiais.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration-authentication',
  templateUrl: './registration-authentication.page.html',
  styleUrls: ['./registration-authentication.page.scss'],
})
export class RegistrationAuthenticationPage implements OnInit {

  senha: string = "password";
  credenciais: CredenciaisDTO = 
  {
    email:"",
    password:""
  };
  
  sniper : string;
  button = false;

  constructor(public router: Router,
    public autheService: AuthService,
    public alertController: AlertController) { }

    ngOnInit() {
  }

  login(){
    this.button = true;
    this.sniper = "ok";
    this.autheService.authetocation(this.credenciais)
    .subscribe(response=>
      {
        this.autheService.sucessLogin(response.headers.get(('Authorization')));
        this.router.navigate(['/sigup']);
      },catchError=>
      {
        this.presentError();
      });
  }

  showPassword () {
    let show = "text"
    let hide = "password"
    this.senha = show;
    setTimeout(() => {
      this.senha = hide;
    }, 3000);
  }

  async presentError() {
    this.button = false;
    this.sniper = null;
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Email ou senha incorreto. ',
      message: 'Verifique se senha o email estão corretos. ',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/registration-authentication']);
  }

}
