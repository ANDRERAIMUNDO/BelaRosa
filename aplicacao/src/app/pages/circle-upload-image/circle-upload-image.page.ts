import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-upload-image',
  templateUrl: './circle-upload-image.page.html',
  styleUrls: ['./circle-upload-image.page.scss'],
})
export class CircleUploadImagePage {

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
    },2000);
   console.log('enable animation');
  }
}