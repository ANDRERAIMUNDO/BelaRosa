import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

itens: CategoriaDTO[];
  
constructor(public categoriaService: CategoriaService) {}

ngOnInit() {
  this.wakeup();
  }

  wakeup() {
    this.categoriaService.findAll()
    .subscribe(response=>
       {
        console.log('wakeup');
      },
        catchError=>{
          console.log(catchError)  
       });
  }
}
