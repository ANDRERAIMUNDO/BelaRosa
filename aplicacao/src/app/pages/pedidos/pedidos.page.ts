import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoDTO } from '../../models/pedido.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { PedidoService } from '../../services/pedido.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';
import { ProdutoService } from '../../services/produto.service';
import { MpService } from 'src/app/services/mp.service';
import { StatusPayment } from 'src/app/models/mercadopago/statusPayment';
import { PixPayment } from 'src/app/models/mercadopago/pix/pixPaymeny';
import { ProcessPayment } from 'src/app/models/mercadopago/processPayment';
import { ProcessPaymentDTO } from 'src/app/models/mercadopago/processPayment.dto';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})

export class PedidosPage implements OnInit {

  registro: RegistroDTO;
  itens: PedidoDTO [] = [
    {
    registro: {id:""},
    cliente:{id:""},
    enderecoDeEntrega: {id:""},
    pagamento:{ numerosDeParcelas: "", "@type":""},
    itens:[] = [{ quantidade: null ,produto: {id:""}}],
    id: "",
    statusPayment: "",
    pixPayment_id: "",
    reservaPedido: ""
    }
  ];


  pixPayment: PixPayment = {
    id: "",
    id_process: "",
    status: "",
    status_detail: "",
    pixTransactionDetails: {
      id: "",
      net_received_amount: null,
      total_paid_amount: null,
      overpaid_amount: null,
      external_resource_url: "",
      installment_amount: null,
      financial_institution: null,
    },
    pixPointOfInteraction: {
      id: "",
      type: "",
      sub_type: "",
      pixApplicationData: {
        id: "",
        name: "",
        version: ""
      },
      pixTransactionData: {
        id: "",
        qr_code_base64: "",
        qr_code: "",
      }
    },
    registro: {
      id: "",
      email: "",
      cliente: {
        id: "",
        name: "",
        cpf: "",
        dateNasc: "",
        phone: ""
      },
      imageUrl: ""
    }
  }

  statusPayments: StatusPayment = {
    id: "",
    status: "",
    status_detail: "",
    id_process: "",
    date_approved: "",
    payment_method_id: "",
    payment_type_id: "",
    process_payment_id: null
  }

  processPayment : ProcessPayment = {
    transaction_amount: null,
    token: "",
    description: "",
    installments: null,
    payment_method_id: "",
    issuer_id: null,
    payer:  {
      email: ""
    }
  }

  endereco: Endereco = {
    id: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: ""
  }
  pedido: PedidoDTO;
  page: number = 0;
  statusPayment: StatusPayment [] = [];
  details: string;
  endereco_de_entrega_id : string;
  statusPaymentDetails_select: string;
  pixPaymentDetails_select: string;
  reservaPedidoDetails_select: string;



  constructor(public pedidoService: PedidoService,
    public mpService: MpService,
    public storageService: StorageService,
    public registroService: RegistroService,
    public produtoService: ProdutoService,
    public enderecoService: EnderecoService,
    public router: Router) { }

  ngOnInit() {
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        { 
          this.registro = response as RegistroDTO;
          this.getPedidos();
        },
       catchError =>
       {
        console.log("erro");
       });
    }
  }

  getPedido() {
      const name = '';
      this.pedidoService.searchAll(name, this.page, 12)
      .subscribe(response =>
        {
          let start = this.itens.length;
          this.itens = this.itens.concat(response['content']);
          let end = this.itens.length -1;
        },
        catchError =>                                                                                                                                                                                                                                                                                               
        {
          console.log(catchError);
        });
  }

  getPedidos(){
    this.itens = [];
    this.pedidoService.findAll().subscribe(response=>
      {
        let start = this.itens.length;
        this.itens = this.itens.concat(response['content']);
        console.log(this.itens);
        let end = this.itens.length -1;
    },
    catchError =>                                                                                                                                                                                                                                                                                               
    {
      console.log(catchError);
    });
  } 

  pedidoDetails(pedido_id: string) {
    this.pedidoService.findById(pedido_id)
    .subscribe(response=> {
      this.pedido = response as PedidoDTO;
      this.endereco_de_entrega_id = this.pedido.enderecoDeEntrega.id;
      this.statusPaymentDetails_select = this.pedido.statusPayment;
      this.pixPaymentDetails_select = this.pedido.pixPayment_id;
      this.reservaPedidoDetails_select = this.pedido.reservaPedido;
      if (this.pixPaymentDetails_select != null) {
        this.getpixFindById();
        this.getEndereco();
      }
      if (this.statusPaymentDetails_select != null) {
        this.getProcessPayment();
        this.getstatusPayment();
        this.getEndereco();
      }
      console.log(this.pedido);
    });
    console.log(pedido_id);
    this.details = "ok";
  }

  getpixFindById() {
    this.mpService.pixFindById(this.pixPaymentDetails_select)
    .subscribe(response=> {
      this.pixPayment = response as PixPayment;
      console.log("pixPayment");
      console.log(this.pixPayment);
    }, catchError => {
        console.log(catchError);
      }); 
  }

  getProcessPayment() {
    this.mpService.findByIdProcessPayment(this.statusPaymentDetails_select)
    .subscribe(response=> {
      this.processPayment = response as ProcessPayment;
      console.log(this.processPayment)
    }, catchError => {
      console.log(catchError);
    }); 
  }

  getstatusPayment() {
    this.mpService.findById(this.statusPaymentDetails_select)
    .subscribe(response=> {
      this.statusPayments = response as StatusPayment; 
      console.log("statusPayments");
      console.log(this.statusPayments);
    }, catchError => {
      console.log(catchError);
    });
  }

  getEndereco() {
    this.enderecoService.findById(this.endereco_de_entrega_id)
    .subscribe(response=> {
      this.endereco = response as Endereco;
    }, catchError => {
      console.log(catchError);
    });
  }

  backProfile() {
    this.details = null;
  }

  doRefresh(event) {
    this.page = 0;
    this.itens = [];
    const name = event.target.value;
    this.produtoService.searchAll(name,this.page,0)
    .subscribe(response => {
      let start = this.itens.length;
      this.itens = this.itens.concat(response['content']);  
      let end = this.itens.length -1;
    });
    this.getPedido();
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }
}