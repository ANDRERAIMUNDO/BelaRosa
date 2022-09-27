import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Endereco } from '../../models/endereco';
import { PedidoDTO } from '../../models/pedido.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { CardService } from '../../services/card.service';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment-form.page.html',
  styleUrls: ['./payment-form.page.scss'],
})
export class PaymentFormPage implements OnInit {
  registro: RegistroDTO;
  pedido: PedidoDTO;

  constructor(public storageService: StorageService,
    public registroService: RegistroService,
    public router: Router,
    public route: ActivatedRoute,
    public loadingController: LoadingController){
      this.route.queryParams.subscribe(params=> {
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
          this.pedido = getNav.extras.state.pedido;
        }
      }); 
    }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
        }, catchError =>
            {
              if (catchError.status == 403)
                {
                  this.router.navigate(['/address']);
              } 
          }
      );
    }
  }

  pagamentoCartao() {
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.pedido
      }
    };
    this.router.navigate(['/dashboard/payment-form/pagamentocartao'], navigationExtras);
  }

  loand(){
    this.presentLoading();
  }


  pagamentoPix() {
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.pedido
      }
    };
    this.router.navigate(['/dashboard/payment-form/pagamentopix'], navigationExtras);
  }

  pagamentoVistaLoja() {
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.pedido
      }
    };
    this.router.navigateByUrl('/dashboard/payment-form/cashpayment', navigationExtras);
  }
  
async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Aguarde...',
    keyboardClose: true,
    spinner:"lines-small",
    cssClass: 'my-custom-class',
    duration: 5000
  });
  await loading.present();
  const { role, data } = await loading.onDidDismiss();
}

}