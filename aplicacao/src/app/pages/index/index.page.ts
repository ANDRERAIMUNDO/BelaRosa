import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { API_CONFIG } from 'src/config/config';
import { ClienteDTO } from '../../models/cliente.dto';
import { Endereco } from '../../models/endereco';
import { ProdutoDTO } from '../../models/produto.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { ProdutoService } from '../../services/produto.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public produtoService: ProdutoService, 
    public router: Router,
    public storageService: StorageService,
    public registroService: RegistroService,
    public enderecoService: EnderecoService,
    public clienteService: ClienteService,
    public alertController: AlertController) { }

  data: string;
  itens: ProdutoDTO [] = [];
  page: number = 0;
  registro : RegistroDTO;
  cliente: ClienteDTO;
  endereco: Endereco;
  
  ngOnInit() {
    this.data = null;
    this.getProduto();
    this.getMyData();
  }

  getProduto() {
    const name = '';
    this.produtoService.searchAll(name, this.page, 12)
    .subscribe(response =>
      {
        let start = this.itens.length;
        this.itens = this.itens.concat(response['content']);
        let end = this.itens.length -1;
        this.loadImage(start, end);
      },
      catchError =>                                                                                                                                                                                                                                                                                               
      {
        console.log(catchError);
      });
  }

  getMyData(){
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
          this.data = null;
          this.getCliente();
        },
       catchError =>
       {
         if (catchError.status == 403)
         {
           this.router.navigate(['/home']);
         }
       });
    }
  }

  getCliente() {
    this.clienteService.findById(this.registro.id)
    .subscribe(response=>
      {
        this.cliente = response as ClienteDTO;
        this.getEndereco();
      },
      catchError =>
      {
        this.alertRegistro();
      });
  }

  getEndereco(){
    this.enderecoService.findById(this.cliente.id)
    .subscribe(response=>
      {
        this.endereco = response as Endereco;
      },
     catchError =>
     {
       if (catchError.status == 403)
       {  
         this.router.navigate(['/home']);
       }
     }
    );  
  }

  loadImage(start: number, end: number) {
    for (var i = start; i<= end; i++) {
      let item = this.itens[i];
      this.produtoService.getProdutoImage(item.id)
      .subscribe(response =>
        {
          //item.imageUrl = `${API_CONFIG.bukectBaseUrl}/produtos/prod${item.id}-small.png`;
          item.imageUrl = `${API_CONFIG.bukectBaseUrl}/prod%2Fpro${item.id}.png?alt=media&amp;token=null`;
        },
        catchError => 
        {
          if (catchError)
          {
            console.log("not image");
            item.imageUrl = '../../assets/Camera.svg';
          }
        });
    }
  }

  produtoDetails(produto_id: string) {
    this.router.navigate(['/dashboard/produto-detail', {produto_id: produto_id}]);
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
      this.loadImage(start, end);
    });
    this.getProduto();
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }

  loadData(event) {
    this.getProduto();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  onInput(event: any){
    this.page = 0;
    this.itens = [];
    const name = event.target.value;
    this.produtoService.searchAll(name,this.page,0)
    .subscribe(response => {
      let start = this.itens.length;
      this.itens = this.itens.concat(response['content']);  
      let end = this.itens.length -1;
      this.loadImage(start, end);
    });
  }


 async alertRegistro () {
  const alert = await this.alertController.create(
    {
      cssClass: 'registration-success',
      header: 'ops!',
      subHeader: 'Você não finalizou seu cadastro',
      message: 'Termine seu cadastro para acessar nossos conteudos. ',
      buttons: [
        {
          text :'Clique aqui',
          cssClass: 'secondary',
          handler: () =>
          {
            this.router.navigate(['/sigup']);
          }
        }
      ]
    }
  )
  await alert.present();
}
}