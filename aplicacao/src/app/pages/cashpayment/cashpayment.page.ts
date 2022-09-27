import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CardItem } from 'src/app/models/card-item';
import { Endereco } from 'src/app/models/endereco';
import { PedidoDTO } from 'src/app/models/pedido.dto';
import { RegistroDTO } from 'src/app/models/registro.dto';
import { CardService } from 'src/app/services/card.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { RegistroService } from 'src/app/services/registro.service';
import { StorageService } from 'src/app/services/storage.service';
import { ReservaPedidoDTO } from 'src/app/models/reservaPedido.dto';

@Component({
  selector: 'app-cashpayment',
  templateUrl: './cashpayment.page.html',
  styleUrls: ['./cashpayment.page.scss'],
})
export class CashpaymentPage implements OnInit {
  formGroupDate: FormGroup;
  cardItems: CardItem[];
  pedido: PedidoDTO;
  registro: RegistroDTO;
  registroId: string;
  endereco: Endereco;
  cashPayment: any;
  transation_id: string;
  term: string;
  informacaoDeEntrega: string;
  sniper : string;
  button = false;

  reservaPedidoDTO: ReservaPedidoDTO = {
    id:"",
    reservaPedido:""
  }

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public pedidoService: PedidoService,
    public cardService: CardService,
    public storageService: StorageService,
    public registroService: RegistroService,
    public enderecoService: EnderecoService) {
    this.route.queryParams.subscribe(params=> {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.pedido = getNav.extras.state.pedido;
      }
    }); 
  }

  ngOnInit() {
    this.loadFormDate();
    this.transation_id = null;
    this.registroId = this.pedido.registro.id;
    this.cardItems = this.cardService.getCard().itens;
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findById(this.registroId)
      .subscribe(response=>
        { 
          this.registro = response as RegistroDTO;
          this.getEndereco();
        }, catchError =>
        {
          console.log('algo deu errado');
      }); 
    }
  }


  loadFormDate(): void {
    this.formGroupDate = this.formBuilder.group({
      informacaoDeEntrega: ["", [Validators.required]],
     "@type": ["reservaDePedido"]  
    });
  }

  getEndereco(){
    this.enderecoService.findById(this.registroId)
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
    this.pedido.pagamento = this.formGroupDate.value;
    this.pedidoService.insert(this.pedido)
    .subscribe(response =>
      {
        this.transation_id = this.extrairId(response.headers.get('location'));
        this.setReservaPedido();
      //  this.findById();//alterado em 13-02-2022
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

    setReservaPedido() {
      let informacaoDeEntrega = this.formGroupDate.get('informacaoDeEntrega').value;
      let reservaPedido = "Aguardando retirada em: " + informacaoDeEntrega;
      this.reservaPedidoDTO.reservaPedido = reservaPedido;

      this.pedidoService.updateReservaPedido(this.transation_id, this.reservaPedidoDTO)
      .subscribe(response=> {
        console.log(response);
        console.log(this.reservaPedidoDTO);
        console.log("tudo certo")
      }, catchError=>
      {
        console.log("algo deu errado");
        console.log(catchError);
      });
    }
  
  findById() {
    this.pedidoService.findById(this.transation_id)
    .subscribe(response=>
      {
        this.pedido = response as PedidoDTO;
      },
      catchError =>
      {
        if (catchError.status == 403)
        {  
          this.errrorPresentAlert();
        }
      });
  }

  onChangeDataTime($event) {
    let informacaoDeEntrega = this.formGroupDate.get('informacaoDeEntrega').value;
    this.informacaoDeEntrega = informacaoDeEntrega;
  }

  onChangeTerm($event) {
    let term = "ok";
    this.term = term;
  }
  total() {
    return this.cardService.total();
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