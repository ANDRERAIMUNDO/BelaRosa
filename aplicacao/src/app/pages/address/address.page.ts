import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Endereco } from '../../models/endereco';
import { PedidoDTO } from '../../models/pedido.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { CardService } from '../../services/card.service';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  registro: RegistroDTO;
  pedido: PedidoDTO;
  endereco: Endereco = {
    id: "",
    cep: "",
    logradouro:"",
    numero: "",
    complemento:"", 
    bairro: "",
    localidade:"", 
    uf:""
  }

  constructor(public storageService: StorageService,
    public registroService: RegistroService,
    public router: Router,
    public clienteService: ClienteService,
    public enderecoService: EnderecoService,
    public cardService: CardService){}

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
          this.getEndereco();
          let card = this.cardService.getCard();
          this.pedido =
          {
            registro: {id: response['id'] },
            cliente: { id: response['id'] },
            enderecoDeEntrega: null,
            statusPayment: null,
            pixPayment_id: null,
            reservaPedido: null,
            pagamento: null,
            itens: card.itens.map(x => { return { quantidade: x.quantidade, produto: { id: x.produto.id } } })
          }
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

  nextPage(endereco: Endereco) {
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: this.pedido
      }
    };
    this.pedido.enderecoDeEntrega = { id: endereco.id };
    this.router.navigate(['/dashboard/payment-form'], navigationExtras);
  }
}
