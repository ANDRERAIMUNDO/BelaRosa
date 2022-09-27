import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor (public authService: AuthService, public router: Router){}

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
   // this.router.navigate(['/dashboard/index']);
  }
}
