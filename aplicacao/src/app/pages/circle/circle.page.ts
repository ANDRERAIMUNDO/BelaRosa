import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
})
export class CirclePage {

  animation = true;
  constructor(public router: Router) { 
  }

  ionViewDidEnter () {
    this.animationAddressPage();
  }

  animationAddressPage (){
    setTimeout(()=> {
      if (this.animation == true) {
        this.router.navigate(['/dashboard/address']);
      }
    },3000);
   console.log('enable animation');
  }
}