import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgxMercadopagoService } from 'ngx-mercadopago';
import { Payment } from 'src/app/models/mercadopago/payment';
import { CardItem } from '../../models/card-item';
import { DataCartao } from '../../models/data-cartao';

import { PedidoDTO } from '../../models/pedido.dto';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-pagamentocartao',
  templateUrl: './pagamentocartao.page.html',
  styleUrls: ['./pagamentocartao.page.scss'],
})
export class PagamentocartaoPage implements OnInit {

  pedido: PedidoDTO;
  itens: CardItem[];
  parcelas: number;
  formGroup: FormGroup;
  formGroupCartao: FormGroup;
  dataCartao: DataCartao;
  cardNumber: string;//mercado pago
  paymentMethodId: any;//mercado pago
  payment_type_id: any;//mercado pago
  imageUrl: any;//mercado pago
  issuerIstallment: number;//mercado pago
  data: any [] = [];//mercado pago
  installments: any; //mercado pago
  installment: any; //mercado pago
  installment_rate: any;//mercado pago
  amount: any; //mercadopago
  total: any;

  payment: Payment = {
    email: "",
    docType: "",
    docNumber: "",
    cardholderName: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    cardNumber: "",
    securityCode: "",
    issuer: 0,
    installments: 0,
    transactionAmount: 0,
    paymentMethodId: "",
    description: ""
  }
  
  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public ngxMpService: NgxMercadopagoService,
    public cardService: CardService) {
    this.route.queryParams.subscribe(params=> {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.pedido = getNav.extras.state.pedido;
      }
    }); 
  }

  ngOnInit(){
    this.ngxMpService.initialize();//iniciar serviços do mercado pago
    this.loand();
    this.loadForm();
    this.loadFormCartao();
    let card = this.cardService.getCard();
    this.itens = card.itens;
    this.getTotal();
  }

  loadForm(): void {
    this.formGroup = this.formBuilder.group({
      numerosDeParcelas: [0, Validators.required],
      "@type": ["pagamentoCartao"]  
    });
  }

  loadFormCartao(): void {
    this.formGroupCartao = this.formBuilder.group({
     numero: ["", [Validators.required,Validators.minLength(16), Validators.maxLength(16)]],
     titular: ["", [Validators.required]],
     paymentMethodId: [""],
     validade: ["", [Validators.required]],
    });
  }

  onChange($event) { //pega o numero do cartao e armazena no cardNumber
    this.cardNumber = this.formGroupCartao.get('numero').value;
    this.getPaymentMethod();
  }
  
  onChangeDataTime($event) {
    let cardExpiration = this.formGroupCartao.get('validade').value;
    this.payment.cardExpirationMonth = cardExpiration.slice(5,7);
    this.payment.cardExpirationYear = cardExpiration.slice(2,4);
  }

  onChangeInstalment($event) {
    let n  = this.formGroup.get('numerosDeParcelas').value;
    this.installments = n;
    this.installment = this.installments;
    this.payment.installments = this.installment.installments;
    this.pedido.pagamento = this.formGroup.value;//salvando pedido
    let total = n.installment_rate / this.payment.installments + this.amount / this.payment.installments;
    this.total = total;
    this.installment_rate = n.installment_rate;
  } 

  async getPaymentMethod() { //2º reconhecendo a bandeira do cartao
    let cardNumber = this.cardNumber;
      const paymentMethod = await this.ngxMpService.getPaymentMethod({
         bin: cardNumber
      }).toPromise();
    this.paymentMethodId = paymentMethod.data[0].id;
    this.payment_type_id = paymentMethod.data[0].payment_type_id;
    this.imageUrl = paymentMethod.data[0].secure_thumbnail;
    this.payment.cardNumber = cardNumber;
    this.payment.paymentMethodId = this.paymentMethodId;
    this.getInstallments();
  }

  async getInstallments() {//3º obter parcelas valor + taxa mercadopago
    const issuer = await this.ngxMpService.getInstallments({
    payment_type_id : this.payment_type_id,
    payment_method_id: this.paymentMethodId,
    bin: this.cardNumber.slice(0,6)
  }).toPromise();
  var x = issuer.data[0].issuer.id;
  var y: number = + x;
  this.issuerIstallment = y;
  this.payment.issuer = this.issuerIstallment;
  this.data = issuer.data[0].payer_costs;
  this.payment.issuer = this.issuerIstallment;
}

async getCardHolderName() {
  let cardHolderName = this.formGroupCartao.get('titular').value;
  this.payment.cardholderName = cardHolderName;
}
async getDescription() {
  let description = "pagamento com cartao " + this.paymentMethodId;
  this.payment.description = description;
}  
    getTotal() {
      this.amount = this.cardService.total();
      this.payment.transactionAmount = this.cardService.total();
    }

    loand(){
      this.presentLoading();
    }

    onSubmit() {
      this.getCardHolderName();
      this.getDescription();
      this.dataCartao = this.formGroupCartao.value;
        let navigationExtras: NavigationExtras = {
          state: {
            pedido: this.pedido,
            dataCartao : this.dataCartao,
            payment: this.payment,
            installment: this.installment
          }
        };
        this.router.navigate(['/dashboard/payment-form/order-confirmation-page', {pedido: this.pedido}], navigationExtras);
      }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde...',
      keyboardClose: true,
      spinner:"lines-small",
      cssClass: 'my-custom-class',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
