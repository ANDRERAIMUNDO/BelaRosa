import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController} from '@ionic/angular';
import { RegistrationDTO } from '../../models/registration.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'] 
})
export class RegistrationPage implements OnInit {

  formGroup: FormGroup;
  registro: RegistroDTO;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
  senha: string = "password";
  emailMsg: string;
  passwordMsg: string;
  validEmailMsg: string;
  validPasswordMsg: string;
  sniper : string;
  button = false;
  registrationDTO: RegistrationDTO =
  {
    email:"",
    password:""
  };
  
  constructor( public router: Router,
    public registroService: RegistroService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.validEmailMsg = "ok";
    this.validPasswordMsg = "ok";
    this.presentLoading();
    this.formGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]]
      });
  }

  submitForm() {
    this.button = true;
    this.sniper = "ok";
      this.registroService.insert(this.registrationDTO)
      .subscribe(response =>
        {
          this.registrationSuccess();
        }, catchError=>
        {
          console.log(catchError)
          this.presentFindByEmail();
          this.router.navigate(['/registration']);
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

  onChangeEmail($event) { 
    this.email = this.formGroup.get('email').value;
    this.emailConfirm = this.formGroup.get('emailConfirm').value;
    let email = this.email;
    let emailConfirm = this.emailConfirm;
    if (email == emailConfirm) 
    {
      this.registrationDTO.email = this.email;
      this.validEmailMsg = null;
      this.emailMsg = null;
    }
    else 
    {
     this.emailMsg = "ok";
    }
  }
  
  onChangePassword($event) {
    this.password = this.formGroup.get('password').value;
    this.passwordConfirm = this.formGroup.get('passwordConfirm').value;
    let password = this.password;
    let passwordConfirm = this.passwordConfirm;
    if (password == passwordConfirm) 
    {
      this.registrationDTO.password = this.password;
      this.validPasswordMsg = null;
      this.passwordMsg = null;
    }
    else 
    {
     this.passwordMsg = "ok ";
    }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Carregando serviços ...',
      duration: 7000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentEmailConfirm() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Voce digitou dois emails direfentes',
      message: 'Antes de confirmar verifique se os email estão iguais.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.button = false;
    this.sniper = null;
    this.router.navigate(['/registration']);
  }

  async presentErrorPasswordConfirm() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Voce digitou senhas direfentes',
      message: 'Antes de confirmar verifique se as senhas estão iguais.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.button = false;
    this.sniper = null;
    this.router.navigate(['/registration']);
  }

  async presentFindByEmail() {
    const alert = await this.alertController.create({
      header: 'Não é possivel usar este email',
      subHeader: 'Se o email digitado for seu',
      message: 'click em "Possui uma conta e não consegue acessar"',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.button = false;
    this.sniper = null;
    this.router.navigate(['/registration']);
  }

  async registrationSuccess () {
    const alert = await this.alertController.create(
      {
        cssClass: 'registration-success',
        header: 'Ok',
        subHeader: 'Sucesso no Registro',
        message: 'Agora confirme se é você mesmo.',
        buttons: [
          {
            text :'Continuar',
            cssClass: 'secondary',
            handler: () =>
            {
              this.router.navigate(['/registration-authentication']);
            }
          }
        ]
      }
    )
    await alert.present();
  }
}
