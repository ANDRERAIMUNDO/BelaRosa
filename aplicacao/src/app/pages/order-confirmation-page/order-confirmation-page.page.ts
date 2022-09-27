import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { NgxMercadopagoService } from 'ngx-mercadopago';
import { Payment } from 'src/app/models/mercadopago/payment';
import { ProcessPayment } from 'src/app/models/mercadopago/processPayment';
import { ProcessPaymentDTO } from 'src/app/models/mercadopago/processPayment.dto';
import { StateStatusPaymeny } from 'src/app/models/mercadopago/stateStatusPayment';
import { StatusPayment } from 'src/app/models/mercadopago/statusPayment';
import { UpdateStatusPaymentPedidoDTO } from 'src/app/models/update-status-payment-pedido.dto';
import { MpService } from 'src/app/services/mp.service';
import { CardItem } from '../../models/card-item';
import { ClienteDTO } from '../../models/cliente.dto';
import { DataCartao } from '../../models/data-cartao';
import { Endereco } from '../../models/endereco';
import { PagamentoDTO } from '../../models/pagamento.dto';
import { PedidoDTO } from '../../models/pedido.dto';
import { ProdutoDTO } from '../../models/produto.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { CardService } from '../../services/card.service';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { PedidoService } from '../../services/pedido.service';
import { ProdutoService } from '../../services/produto.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.page.html',
  styleUrls: ['./order-confirmation-page.page.scss']
})
export class OrderConfirmationPagePage implements OnInit {

  pedido: PedidoDTO; 
  cardItems: CardItem[];
  payment: Payment; //mercado pago
  itens: CardItem[];
  produto: ProdutoDTO;
  registro: RegistroDTO;
  registroId: string;
  cliente : ClienteDTO;
  endereco: Endereco;
  codpedido: string;
  mpcodpedido: string;
  dataCartao: DataCartao;
  pagamento: PagamentoDTO;
  formGroup: FormGroup;
  formGroupUpdateStatusPayment: FormGroup;
  data_response: any;

  sniper : string;
  button = false;

  startNumeroCartao: string; //não mostrar todos o numeros de cartao
  endNumeroCartao: string; //não mostrar todos o numeros de cartao
  startValidCartao: string; //formata validade do cartao
  endValidCartao: string; //formata validade do cartao
  startcpf: string; //formata cpf
  endcpf: string; //formata cpf

  validade: string;
  quantidade_de_parcelas:  string;
  ano: string;
  mes: string;

  installment : Instalment; //mercado pago
  paymentRejected: string;//mercadopago
  paymentAccredited: string;//mercadopago

  processPayment : ProcessPayment = {
    transaction_amount: 0,
    token: "",
    description: "",
    installments: 0,
    payment_method_id: "",
    issuer_id: 0,
    payer: 
      {
        email: ""
      }
    }

  processPaymentDTO: ProcessPaymentDTO = {
    registroId: "",
    transaction_amount: 0,
    token: "",
    description: "",
    installments: 0,
    payment_method_id: "",
    issuer_id: 0,
    email: ""
  }

  responseStatusPayment: StatusPayment =
  {
    id: "",
    status: "", 
    status_detail: "",
    id_process: "",
    date_approved: "",
    payment_method_id: "",
    payment_type_id: "",
    process_payment_id: 0
  }

  updateStatusPaymentPedidoDTO: UpdateStatusPaymentPedidoDTO = {
    id: "",
    statusPayment: ""
  }

//  statusPayment: any [] = [];

  constructor( public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public registroService: RegistroService,
    public cardService: CardService,
    public storageService: StorageService,
    public enderecoService: EnderecoService,
    public pedidoService: PedidoService,
    public loadingController: LoadingController,
    public clienteService: ClienteService,
    public produtoService: ProdutoService,
    public ngxMpService: NgxMercadopagoService,
    public mpService: MpService,
    public alertController: AlertController) {
      this.route.queryParams.subscribe(params=> {
        let getNav = this.router.getCurrentNavigation();
        let getNavCartao = this.router.getCurrentNavigation();
        let getNavPayment = this.router.getCurrentNavigation();
        let getNavInstallment = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
          this.pedido = getNav.extras.state.pedido;
        };
        if (getNavCartao.extras.state) {
          this.dataCartao = getNavCartao.extras.state.dataCartao;
        };
        if (getNavPayment.extras.state) {
          this.payment = getNavPayment.extras.state.payment;
        };
        if (getNavInstallment.extras.state) {
          this.installment = getNavInstallment.extras.state.installment;
        }
      }); 
    }
  
    ngOnInit() { 
    this.pedido = this.pedido;
    this.pagamento = this.pedido.pagamento;
    this.payment = this.payment;
    this.cardItems = this.cardService.getCard().itens;
    this.quantidade_de_parcelas = this.pagamento.numerosDeParcelas;
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
    this.loadForm();
    this.startNumeroCartao = this.dataCartao.numero.slice(0,3);
    this.endNumeroCartao = this.dataCartao.numero.slice(14,16);
    let validadeDoCartão = this.dataCartao.validade;
    this.startValidCartao = validadeDoCartão.slice(5,7);
    this.endValidCartao = validadeDoCartão.slice(0,4);
  }

  loadForm(): void {
    this.formGroup = this.formBuilder.group({
      card_cvv: ["", [Validators.required,Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  formUpdateStatusPayment() {
    let id = this.codpedido;
    let statusPayment = this.responseStatusPayment.id;
    this.formGroupUpdateStatusPayment = this.formBuilder.group(
      {
        id: [id],
        statusPayment: [statusPayment]
      });
      console.log(this.formGroupUpdateStatusPayment);
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

  checkoutMp() {
    this.button = true;
    this.sniper = "ok"; 
    this.loandPayment();
  }

  loandPayment() {
    var x = this.payment.installments;
    var y: number = + x;
    this.pedido.pagamento.numerosDeParcelas = y.toString();
    this.payment.docType = "CPF";
    this.payment.docNumber = this.registro.cliente.cpf;
    this.payment.email = this.registro.email;
    this.payment.securityCode = this.formGroup.get('card_cvv').value;
    this.generateToken();
  }

  async generateToken() {
      const cardToken = await this.ngxMpService.createToken(this.payment).toPromise();

       this.processPayment.transaction_amount = this.payment.transactionAmount;
       this.processPayment.token = cardToken;
       this.processPayment.description = this.payment.description;
       this.processPayment.installments = this.payment.installments;
       this.processPayment.payment_method_id = this.payment.paymentMethodId;
       this.processPayment.issuer_id = this.payment.issuer;
       this.processPayment.payer.email = this.payment.email;

       this.processPaymentDTO.registroId = this.registroId;
       this.processPaymentDTO.transaction_amount = this.payment.transactionAmount;
       this.processPaymentDTO.token = cardToken.data.id;
       this.processPaymentDTO.description = this.payment.description;
       this.processPaymentDTO.installments = this.payment.installments;
       this.processPaymentDTO.payment_method_id = this.payment.paymentMethodId;
       this.processPaymentDTO.issuer_id = this.payment.issuer;
       this.processPaymentDTO.email = this.payment.email;

      this.mpService.insert(this.processPaymentDTO)
      .subscribe(response=>
      {
        if (response.status == 201 || response.status ==200)
        {
         this.mpcodpedido = this.extrairId(response.headers.get('location'));
         this.getMpPedidoStatus();
        }
      },
      catchError =>
      {
        if (catchError.status == 403)
        {  
          this.errrorPresentAlert();
        }
     });
    }

    checkout() {  
      this.pedidoService.insert(this.pedido)
      .subscribe(response=>
        {
          this.cardService.createrOrClearCard();
          this.codpedido = this.extrairPedidoId(response.headers.get('location'));
          this.updateStatusPaymentPedidoDTO.id = this.codpedido;
          let resultPayment = this.responseStatusPayment.id;
          this.updateStatusPaymentPedidoDTO.statusPayment =resultPayment;
          this.setStatusPaymentPedidoValue();
        },
        catchError =>
        {
          if (catchError.status == 403)
          {  
            this.router.navigate(['/address']);//criar um alert controller e redirecionar pagina
          }
        });
    }

    setStatusPaymentPedidoValue() {
      this.pedidoService.updateStatusPaymenty(this.codpedido,this.updateStatusPaymentPedidoDTO)
      .subscribe(response=> {
        console.log(response);
        console.log("tudo certo")
      }, catchError=>
      {
        console.log("algo deu errado");
        console.log(catchError);
      });
    }

    home() {
      this.router.navigate(['/dashboard']);
    }

    total(){
      return this.payment.transactionAmount;  
    }

    private extrairId (location: string): string  {
      let position = location.lastIndexOf('/');
      return location.substring(position + 1, location.length);
    }

    private extrairPedidoId (location: string): string  {
      let position = location.lastIndexOf('/');
      return location.substring(position + 1, location.length);
    }

  getProdutoCliente() {
    let card = this.cardService.getCard();
    this.itens = card.itens;

    for (var i =0; i<this.itens.length; i++) {
    let item = this.itens[i];
     this.produtoService.findById(item.produto.id)
     .subscribe(response=>
      {
      this.produto = response as ProdutoDTO;
      },
        catchError =>
        {
          console.log(catchError);
        }); 
    }
  }

  getMpPedidoStatus() {
    let status1 = "accredited";  
    let status2 = "pending_contingency";
    let status3 = "pending_review_manual";
    let status4 = "cc_rejected_bad_filled_card_number";
    let status5 = "cc_rejected_bad_filled_date";
    let status6 = "cc_rejected_bad_filled_other";
    let status7 = "cc_rejected_bad_filled_security_code";
    let status8 = "cc_rejected_blacklist";
    let status9 = "cc_rejected_call_for_authorize";
    let status10 = "cc_rejected_card_disabled";
    let status11 = "cc_rejected_card_error";
    let status12 = "cc_rejected_duplicated_payment";
    let status13 = "cc_rejected_high_risk";
    let status14 = "cc_rejected_insufficient_amount";
    let status15 = "cc_rejected_invalid_installments";
    let status16 = "cc_rejected_max_attempts";
    let status17 = "cc_rejected_other_reason";
    let status18 = "cc_rejected_card_type_not_allowed";
    
    this.mpService.findById(this.mpcodpedido)
    .subscribe(response=>
      {
        this.responseStatusPayment = response as StatusPayment;
        let resultPayment = this.responseStatusPayment.status_detail;
        //****
        if (resultPayment == status1) {
            this.paymentAccredited = "Pronto, seu pagamento foi aprovado!";
            this.checkout();//no backend getStausPayment, apos confirma recebimento, sendEmailConfirmationpayment no backend
          } else if (resultPayment == status2) {
              this.paymentRejected = "Estamos processando o pagamento.";
            } else if (resultPayment == status3) {
              this.paymentRejected = "Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado ou se necessitamos de mais informação.";
            } else if (resultPayment == status4) {
              this.paymentRejected = "Revise o número do cartão.";
            } else if (resultPayment == status5) {
              this.paymentRejected = "Revise a data de vencimento.";
            } else if (resultPayment == status6) {
              this.paymentRejected =  "Revise seus dados.";
            } else if (resultPayment == status7) {
              this.paymentRejected = "Revise o código de segurança do cartão.";
            } else if (resultPayment == status8) {
              this.paymentRejected =  "Não pudemos processar seu pagamento. Você não sera cobrado.";
            } else if (resultPayment == status9) {
              this.paymentRejected = "Você deve autorizar o pagamento com seu cartão.";
            } else if (resultPayment == status10) {
              this.paymentRejected = "Ligue para o bando de seu cartão para ativar seu cartão. O telefone está no verso do seu cartão.";
            } else if (resultPayment == status11) {
              this.paymentRejected = "Não conseguimos processar seu pagamento, você não sera cobrado no futuro. ";
            } else if (resultPayment == status12) {
              this.paymentRejected = "Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou escolha outra forma de pagamento.";
            } else if (resultPayment == status13) {
              this.paymentRejected = "Seu pagamento foi recusado." ;
            } else if (resultPayment == status14) {
              this.paymentRejected = "O saldo é insuficiente. Não processamos seu pedido. ";
            } else if (resultPayment == status15) {
              this.paymentRejected =  "O metodo de pagamento não processa pagamentos parcelados.";
          } else if (resultPayment == status16) {
              this.paymentRejected = "Você atingiu o limite de tentativas permitido.";
            } else if (resultPayment == status17) {
              this.paymentRejected = "Metodo de pagamento não processa o pagamento.";
            } else if (resultPayment == status18) {
              this.paymentRejected = "O pagamento foi rejeitado porque o usuário não tem a função crédito habilitada em seu cartão multiplo (débito e crédito). ";
            } else {
              this.errrorPresentAlert();
          }
       //**** */
      },catchError =>
      {
        console.log(catchError);
      }); 
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

export interface Instalment {
  discount_rate: number;
  installment_amount: any;
  installment_rate: number;
  installment_rate_collector: any;
  installments: number;
  labels: any;
  max_allowed_amount: number;
  min_allowed_amount: number;
  payment_method_option_id: string;
  recommended_message: string;
  reimbursement_rate: null
  total_amount: null
}