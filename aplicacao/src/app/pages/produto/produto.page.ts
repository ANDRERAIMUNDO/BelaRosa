import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { ProdutoDTO } from '../../models/produto.dto';
import { CategoriaService } from '../../services/categoria.service';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
  providers: [NavParams]
})
export class ProdutoPage implements OnInit {

  categoria: CategoriaDTO;
  itens: ProdutoDTO[] = [];
  page: number = 0;
  image_true: string;
  image_false: string;

  constructor(public route: ActivatedRoute,
     public router: Router, 
     public produtoService: ProdutoService,
     public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
    this.getProdutos();
  }

  getProdutos() {
    let categoria_id = this.route.snapshot.paramMap.get('categoria_id');
    this.produtoService.findByCategoria(categoria_id, this.page, 10)
    .subscribe(response =>
      {
        let start = this.itens.length;
        this.itens = this.itens.concat(response['content']);
        let end = this.itens.length -1;
        console.log(this.page);
        console.log(this.itens);
        this.loadImage(start, end);
      },
      catchError => 
      {
        console.log(catchError);
      });
  }

  getCategorias(){
    let categoria_id = this.route.snapshot.paramMap.get('categoria_id');
    this.categoriaService.findById(categoria_id)
    .subscribe(response=> 
      {
        this.categoria = response as CategoriaDTO;
        console.log(categoria_id);
      });
  }

  loadImage(start: number, end: number) {
    for (var i = start; i<= end; i++) {
      let item = this.itens[i];
      this.produtoService.getProdutoImageFirebase(item.id)
      .subscribe(response =>
        {
          item.imageUrl = `https://firebasestorage.googleapis.com/v0/b/bela-rosa-storage-firebase.appspot.com/o/prod%2Fpro${item.id}.png?alt=media&amp;token=null`;
        //item.imageUrl = `${API_CONFIG.bukectBaseUrl}/produtos/prod${item.id}-small.png`;
        //item.imageUrl = `${API_CONFIG.bukectBaseUrl}/prod%2Fpro${item.id}.png?alt=media&amp;token=null`;
        });
    }
  }

  produtoDetails(produto_id: string) {
    this.router.navigate(['/dashboard/produto-detail', {produto_id: produto_id}]);
  }

  doRefresh(event) {
    this.page = 0;
    this.itens = [];
    this.getProdutos();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      this.page++;
      this.getProdutos();
      event.target.complete();
      if (this.itens.length == 12) {
        event.target.disabled = true;
      }
    }, 500);
  }

  onInput(event: any){
    let categoria_id = this.route.snapshot.paramMap.get('categoria_id');
    this.page = 0;
    this.itens = [];
    const name = event.target.value;
    this.produtoService.search(name,categoria_id, this.page,12)
    .subscribe(response => {
      let start = this.itens.length;
      this.itens = this.itens.concat(response['content']);  
      let end = this.itens.length -1;
      this.loadImage(start, end);
    });
  }
}       
  