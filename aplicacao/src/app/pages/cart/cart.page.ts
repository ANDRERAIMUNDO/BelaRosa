import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_CONFIG } from 'src/config/config';
import { CardItem } from '../../models/card-item';
import { ProdutoDTO } from '../../models/produto.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { CardService } from '../../services/card.service';
import { ProdutoService } from '../../services/produto.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  itens: CardItem[];

  registro: RegistroDTO;

  constructor(public router: Router, 
    public route: ActivatedRoute, 
    public cardService: CardService, 
    public produtoService: ProdutoService,
    public storageService: StorageService,
    public registroService: RegistroService) { }

    ionViewWillEnter() { 
    this.getMyData();
    const cart = this.cardService.getCard();
    this.itens = cart.itens;
    console.log(this.itens);
  }

  getMyData(){
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
        },
       catchError =>
       {
         if (catchError.status == 403)
         {
           this.router.navigate(['/dashboard/cart']);
         }
       });
    }
  }
  removeItem(produto: ProdutoDTO) {
    this.itens = this.cardService.removerProduto(produto).itens;
  }
  addQuantidade(produto: ProdutoDTO) {
    this.itens = this.cardService.addQuantidade(produto).itens;
  }
  removerQuantidade(produto: ProdutoDTO) {
    this.itens = this.cardService.removerQuantidade(produto).itens;
  }
  total(): number {
    return this.cardService.total();
  }

  loadImage() {
    for (var i =0; i<this.itens.length; i++)
    {
      let itens = this.itens[i];
      this.produtoService.getSmallImage(itens.produto.id)
      .subscribe(response=>
        {
          itens.produto.imageUrl = `${API_CONFIG.bukectBaseUrl}/produtos/prod${itens.produto.id}-small.png`;
        }, catchError => 
        {
          if (catchError.status == 0)
          {
            itens.produto.imageUrl = '../../assets/Camera.svg';
          }
        });
    }
  }

  navigate  () {
    this.router.navigate(['/dashboard/circle-adress']);
  }
}