import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { NgxMercadopagoService } from 'ngx-mercadopago';
import { Endereco } from 'src/app/models/endereco';
import { Payment } from 'src/app/models/mercadopago/payment';
import { PixPaymentDTO } from 'src/app/models/mercadopago/pix/pixPayment.dto';
import { PixPayment } from 'src/app/models/mercadopago/pix/pixPaymeny';
import { RegistroDTO } from 'src/app/models/registro.dto';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MpService } from 'src/app/services/mp.service';
import { RegistroService } from 'src/app/services/registro.service';
import { StorageService } from 'src/app/services/storage.service';
import { CardItem } from '../../models/card-item';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { DataCartao } from '../../models/data-cartao';

import { PedidoDTO } from '../../models/pedido.dto';
import { CardService } from '../../services/card.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { PixPedidoDTO } from 'src/app/models/pixPedido.dto';

@Component({
  selector: 'app-pagamentopix',
  templateUrl: './pagamentopix.page.html',
  styleUrls: ['./pagamentopix.page.scss'],
})
export class PagamentopixPage implements OnInit {

  formGroupDate: FormGroup;
  cardItems: CardItem[];
  pedido: PedidoDTO;
  registro: RegistroDTO;
  registroId: string;
  endereco: Endereco;
  pixPayment: PixPayment;
  transation_id: string;
  qr_code_base64: any;
  qr_code: any;
  pixPaymentDTO: PixPaymentDTO = {
    registroId: "",
    transactionAmount: 0,
    description: "",
    paymentMethodId: "",
    email: "",
    firstName: "",
    lastName: "",
    type: "",
    number: "",
    zipCode: "",
    streetName: "",
    streetNumber: 0,
    neighborhood: "",
    city: "",
    federalUnit: ""
}

  pixPedidoDTO: PixPedidoDTO ={
    id: "",
    pixPayment_id: ""
  }

  codPedido: string;

  sniper : string;
  button = false;
  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public ngxMpService: NgxMercadopagoService,
    public cardService: CardService,
    public storageService: StorageService,
    public registroService: RegistroService,
    public enderecoService: EnderecoService,
    public mpService: MpService,
    public pedidoService: PedidoService,
    public clipboard: Clipboard) {
    this.route.queryParams.subscribe(params=> {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.pedido = getNav.extras.state.pedido;
      }
    }); 
  }

  ngOnInit() {
    this.loadFormDate();
    this.cardItems = this.cardService.getCard().itens;
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findById(this.pedido.registro.id)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
          this.registroId = this.registro.id;
          this.getEndereco();
        }, catchError =>
        {
          console.log('algo deu errado');
      }); 
    }
  }

  loadFormDate(): void {
    this.formGroupDate = this.formBuilder.group({
      status: [""],
     "@type": ["pagamentoPix"]  
    });
  }

  getEndereco(){
    this.enderecoService.findById(this.registro.id)
    .subscribe(response=>
      {
        this.endereco = response as Endereco;
      },
     catchError =>
     {
       if (catchError.status == 403)
       {  
         this.router.navigate(['/address']);
       }
     }
    );  
  }

  checkout() {
    this.button = true;
    this.sniper = "ok";
    this.pixPaymentDTO.registroId = this.registroId;
    this.pixPaymentDTO.transactionAmount = this.total();
    this.pixPaymentDTO.description = "Pagamento via PIX"
    this.pixPaymentDTO.paymentMethodId = "pix"
    this.pixPaymentDTO.email = this.registro.email;
    this.pixPaymentDTO.firstName = this.registro.cliente.name;
    this.pixPaymentDTO.lastName = "teste";//resolve problema
    this.pixPaymentDTO.type = "CPF"
    this.pixPaymentDTO.number = this.registro.cliente.cpf;
    this.pixPaymentDTO.zipCode = this.endereco.cep;
    this.pixPaymentDTO.streetName = this.endereco.logradouro;
    var w = this.endereco.numero;
    var t: number = +w;
    this.pixPaymentDTO.streetNumber = t;
    this.pixPaymentDTO.neighborhood = this.endereco.bairro;
    this.pixPaymentDTO.city = this.endereco.localidade;
    this.pixPaymentDTO.federalUnit = this.endereco.uf;
    this.pix();
  }

  pix() {
    this.mpService.pix(this.pixPaymentDTO)
    .subscribe(response =>
      { 
        this.transation_id = this.extrairId(response.headers.get('location'));
        this.pixFindById();
        this.insertPedido();
      },
      catchError =>
      {
        if (catchError.status == 403)
        {  
          this.errrorPresentAlert();
        }
     });
    }

    insertPedido() {
      this.pedido.pagamento = this.formGroupDate.value;
      this.pedidoService.insert(this.pedido)
      .subscribe(response =>
        {
          this.codPedido = this.extrairPedidoId(response.headers.get('location'));
          console.log(this.codPedido);
          this.setPixPayment();
          this.cardService.createrOrClearCard();
        },
        catchError =>
        {
          if (catchError.status == 403)
          {  
            this.errrorPresentAlert();
          }
       });
      }


    private extrairPedidoId (location: string): string  {
      let position = location.lastIndexOf('/');
      return location.substring(position + 1, location.length);
    }

    setPixPayment() {
      this.pixPedidoDTO.id = this.pixPayment.id;
      let pixPayment_id = this.pixPayment.id;
      this.pixPedidoDTO.pixPayment_id = pixPayment_id;

      this.pedidoService.updatePixPaymenty(this.codPedido, this.pixPedidoDTO)
      .subscribe(response=> {
        console.log(response);
        console.log("tudo certo")
      }, catchError=>
      {
        console.log("algo deu errado");
        console.log(catchError);
      });
    }

    pixFindById() {
      this.mpService.pixFindById(this.transation_id)
      .subscribe(response=>
        {
          this.pixPayment = response as PixPayment;
          this.qr_code_base64 = this.pixPayment.pixPointOfInteraction.pixTransactionData.qr_code_base64;
          this.qr_code = this.pixPayment.pixPointOfInteraction.pixTransactionData.qr_code;
        },
        catchError =>
        {
          if (catchError.status == 403)
          {  
            this.errrorPresentAlert();
          }
       });
      }
    
    total(){
      return this.cardService.total();
    }


  copyData(){
    this.clipboard.copy(this.qr_code);
  }

  private extrairId (location: string): string  {
    let position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }

  async errrorPresentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: 'Falha ao processar pagamento ou conexão internet falhou',
      message: 'Você não será cobrado!',
      buttons: ['Continuar']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/dashboard/cart']);
  }
}
