import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { API_CONFIG } from 'src/config/config';
import { Descricao } from '../../models/descricao';
import { ProdutoDTO } from '../../models/produto.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { CardService } from '../../services/card.service';
import { DescricaoService } from '../../services/descricao.service';
import { ProdutoService } from '../../services/produto.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage implements OnInit {

  item: ProdutoDTO = 
  {
    id: "",
    name: "",
    price: 0,
    imageUrl: ""
  }
  detail: Descricao;
  registro : RegistroDTO;
  codRegistro:boolean = false;
  produtoDisponivel: boolean = false;

  constructor(public cardService: CardService, 
    public storageService: StorageService,
    public route: ActivatedRoute, 
    public produtoService: ProdutoService,
    public descricaoservice: DescricaoService, 
    public registroService: RegistroService,
    public router: Router,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
   this.getProduto();
   this.getDescricaoProduto();
   this.getMyData();
  }

  getMyData(){
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
          this.codRegistro = true;
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

  getProduto() {
    let produto_id = this.route.snapshot.paramMap.get('produto_id');
    this.produtoService.findById(produto_id)
    .subscribe(response=> 
      {
        this.item = response;
        this.getImage();
      }, 
      catchError=>
      {
        console.log(catchError);
      });
  }

  getDescricaoProduto() {
    let produto_id = this.route.snapshot.paramMap.get('produto_id');
    this.descricaoservice.findById(produto_id)
    .subscribe(response=> 
      {
        this.detail = response as Descricao;
      }, 
      catchError=>
      {
        console.log(catchError);
      });
  }

  getImage() {
    this.produtoService.getProdutoImage(this.item.id)
    .subscribe(response=>
      {
        //this.item.imageUrl = `${API_CONFIG.bukectBaseUrl}/produtos/prod${this.item.id}.png`;
        this.item.imageUrl = `${API_CONFIG.bukectBaseUrl}/prod%2Fpro${this.item.id}.png?alt=media&token=`;
      },
      catchError => 
      {
        console.log(catchError);
      });
  }

  addToCard(produto: ProdutoDTO) {
    this.cardService.addProduto(produto);
    this.presentActionSheet();
    
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Suas compras. ',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Ir ao carrinho',
        role: 'destructive',
        icon: 'cart-outline',
        handler: () => {
          this.router.navigate(["/dashboard/cart"]);
        }
      }, {
        text: 'Continuar comprando',
        icon: 'home-outline',
        handler: () => {
          this.router.navigate(["/dashboard/index"]);
        }
      }]
    });
    await actionSheet.present();
  }

}
