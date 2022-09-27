import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavParams } from '@ionic/angular';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  items: CategoriaDTO[];

  constructor(public menuController: MenuController,
    public categoriaService: CategoriaService,
    public router: Router,
    public route: ActivatedRoute){}

ngOnInit() {
  this.menuController.enable(true, 'menu');
  this.menuController.open('menu');

  this.categoriaService.findAll()
    .subscribe(response=>
       {
          this.items=response;
      },
        error=>
                {
                  console.log(error)  
       });
  }

  showProdutos(categoria_id: string) {
  this.router.navigate(['/dashboard/produto', {categoria_id: categoria_id}]);
  }
}
