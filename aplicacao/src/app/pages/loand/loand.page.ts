import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loand',
  templateUrl: './loand.page.html',
  styleUrls: ['./loand.page.scss'],
})
export class LoandPage implements OnInit {
  animation = true;
  constructor(public router: Router) { }
    ngOnInit() {
     setTimeout(()=> {
       if (this.animation == true) {
         this.router.navigate(['/dashboard/index']);
       }
     },7000);
    console.log('enable animation');
    }
  }
