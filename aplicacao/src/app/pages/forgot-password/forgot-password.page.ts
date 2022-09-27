import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewPasswordDTO } from 'src/app/models/new-password.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formGroup: FormGroup;
  newPasswordDTO: NewPasswordDTO =
  {
    email: ""
  };

  sniper : string;
  button = false;

  constructor(public formBuilder: FormBuilder,
    public authService: AuthService,
    public alertController: AlertController,
    public router: Router) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]
      });
  }

  submitForm() {
    this.button = true;
    this.sniper = "ok";
    this.newPasswordDTO.email = this.formGroup.get('email').value;
    this.authService.sendNewPassword(this.newPasswordDTO)
    .subscribe(response=>
      {
        this.presentConfirm();
      }, catchError => 
        {
          this.button = false;
          this.sniper = null;
          this.presentError();
        });    
  }

  back() {
    this.router.navigate(['/home']);
  }

  async presentError() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Confirme se o email digitado está correto.',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/forgot-password']);
  }

  async presentConfirm() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Eviamos um nova senha',
      message: 'Por favor verifique seu email.',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/home']);
  }

}
