import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CredenciaisDTO } from '../../models/credentiais.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  senha: string = "password";                                                                                                                                
  credenciais: CredenciaisDTO = {
    email: "",
    password: ""
  };

  erroLogin: string;
  sniper : string;
  button = false;

  constructor(
    public router: Router,
    public authService: AuthService,
    public loadingController: LoadingController) { }

    ionViewWillEnter() {
      this.erroLogin = null;
    this.refresh();
  }

  refresh() {
    this.authService.refreshToken()
    .subscribe(response=>
      {
          this.authService.sucessLogin(response.headers.get('Authorization'));
          this.router.navigate(['/dashboard/index'])
      }), catchError=> {
            console.log(catchError);
            this.router.navigate(['/login']);
      }
  };
   

  login(){
    this.button = true;
    this.sniper = "ok";
    this.authService.authetocation(this.credenciais)
    .subscribe(response=> 
      {
      this.button = true;
      this.sniper = "ok";
      this.authService.sucessLogin(response.headers.get('Authorization'));
      this.router.navigate(['/dashboard/index']);
      }, 
      catchError=>
      {
        //if (catchError.status == 401)
  //    {
        this.erroLogin = "erro";
        this.button = false;
        this.sniper = null;
     //  }
    });
  }

  showPassword () {
    let show = "text"
    let hide = "password"
    this.senha = show;
    setTimeout(() => {
      this.senha = hide;
    }, 3000);
  }

  reload() {
    this.erroLogin = null;
    this.button = false;
    this.sniper = null;
  }
}
