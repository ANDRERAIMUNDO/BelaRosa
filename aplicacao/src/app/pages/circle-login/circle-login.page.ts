import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-circle-login',
  templateUrl: './circle-login.page.html',
  styleUrls: ['./circle-login.page.scss'],
})
export class CircleLoginPage {

  animation = false;
  time : any;

  constructor(public categoriaService: CategoriaService,
    public alertController: AlertController,
    public router: Router) { 
  }

  ionViewDidEnter () {
    this.time = "undefined";
    this.animationLoginPage();
    this.wakeup();
  }

  wakeup() {
    this.categoriaService.findAll()
    .subscribe(response=>
      {
        this.time = 2;
      },
        catchError=>{
          this.errrorPresentAlert();
          console.log(catchError)  
       });
  }

  animationLoginPage () {
    setTimeout(()=> {
      if (this.animation == false) {
        this.router.navigate(['/login']);
      }
    },this.time);
  }

  async errrorPresentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ops!',
      subHeader: 'Falha na conexão com nossos servidores. ',
      message: 'Verificar sua conexão de internet. ',
      buttons: ['Continuar']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/home']);
  }
}
