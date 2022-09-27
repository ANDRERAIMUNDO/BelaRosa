import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-reload',
  templateUrl: './circle-reload.page.html',
  styleUrls: ['./circle-reload.page.scss'],
})
export class CircleReloadPage {

  animation = true;
  constructor(public router: Router) { 
  }

  ionViewDidEnter () {
    this.animationAddressPage();
  }

  animationAddressPage (){
    setTimeout(()=> {
      if (this.animation == true) {
        this.router.navigate(['/dashboard/profile']);
      }
    },4000);
   console.log('enable animation');
  }
}