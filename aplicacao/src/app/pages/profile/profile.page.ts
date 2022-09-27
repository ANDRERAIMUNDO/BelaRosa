import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RegistroUpdateEmailDTO } from 'src/app/models/registroUpdateEmail.dto';
import { RegistroUpdatePassowordDTO } from 'src/app/models/registroUpdatePassword.dto';
import { AuthService } from 'src/app/services/auth.service';
import { API_CONFIG } from 'src/config/config';
import { ClienteDTO } from '../../models/cliente.dto';
import { Endereco } from '../../models/endereco';
import { RegistroDTO } from '../../models/registro.dto';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { PedidoService } from '../../services/pedido.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  animation = true;
  registro : RegistroDTO;
  id: String = "";
  senha: string = "password";
  registroUpdateEmailDTO: RegistroUpdateEmailDTO =
  {
    email:""
  }   
  registroUpdatePassowordDTO: RegistroUpdatePassowordDTO = 
  {
    password:""
  }
  cliente : ClienteDTO;
  endereco: Endereco;

  updateRegistroValue: string;
  updateClienteValue: string;
  updateAddressValue: string;

  formGroupUpdateEmail: FormGroup;
  formGroupUpdatePassword: FormGroup;
  formGroupUpdateCliente: FormGroup;
  formGroupUpdateAddress: FormGroup;

  email: string;
  newEmail: string;
  emailConfirm: string;
  newPassword: string;
  passwordConfirm: string;
  phone: String = "";
  cep: string;
  phoneSlice: string;
  area : string;
  num : string;
  DateSlice: string;
  dia: string;
  ano: string;
  mes: string;
  CPFSlice: string;
  firstDigits: string;
  secundDigits: string;
  thirdDigist: string;
  lastDigits: string;

  emailMsg: string;
  passwordMsg: string;
  validEmailMsg: string;
  validPasswordMsg: string;

  successUpdate: string;
  sniper : string;
  button = false;
 
  constructor( public storageService:  StorageService,
               public registroService: RegistroService,
               public clienteService: ClienteService,
               public enderecoService: EnderecoService,
               public pedidoService: PedidoService,
               public loadingController: LoadingController,
               public alertController : AlertController,
               public formBuilder: FormBuilder,
               public route: ActivatedRoute,
               public authService: AuthService,
               public router: Router) { }

  ngOnInit() {
  //ionViewWillEnter() {
    this.formUpdateEmail();
    this.formUpdatePassword();
    this.formUpdateCliente();
    this.formUpdateAddress();
    this.updateRegistroValue = "ok";
    this.updateClienteValue = "ok";
    this.updateAddressValue = "ok";
    this.successUpdate = null;
    this.button = false;
    this.sniper = null;
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
          this.cliente = response as ClienteDTO;
          this.getImageIfExists();
          this.getEndereco();
          this.sliceTypeCliente();
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

  sliceTypeCliente() {
    this.email= this.registro.email;
    this.phoneSlice = this.registro.cliente.phone;
    this.area = this.phoneSlice.slice(0,2);
    this.num = this.phoneSlice.slice(2,11);
    this.DateSlice = this.registro.cliente.dateNasc;
    this.dia = this.DateSlice.slice(0,2);  
    this.mes = this.DateSlice.slice(2,4);
    this.ano = this.DateSlice.slice(4,8);
    this.CPFSlice = this.registro.cliente.cpf;
    this.firstDigits = this.CPFSlice.slice(0,3);
    this.secundDigits = this.CPFSlice.slice(3,6);
    this.thirdDigist = this.CPFSlice.slice(6,9);
    this.lastDigits = this.CPFSlice.slice(9,11);
  }

  getImageIfExists(){
    this.registroService.getImageFromBucket(this.registro.id)
    .subscribe(response =>
      {
        this.registro.imageUrl = `${API_CONFIG.bukectBaseUrl}/profiles/cp${this.registro.id}.png`;
        },
        catchError=>{console.log(catchError)});
      }
  
  getEndereco(){
    this.enderecoService.findById(this.registro.id)
      .subscribe(response=>
        {
          this.endereco = response as Endereco;
        },
         catchError =>
         {
           if (catchError.status == 403)
           {  
             this.router.navigate(['/address']);
           }
         }
        );  
  }


  formUpdateEmail() {
    this.id  = this.route.snapshot.params['id'];
    this.formGroupUpdateEmail = this.formBuilder.group(
      {
        email: ['', Validators.email],
        emailConfirm: ['', Validators.email]
      });
  }

  formUpdatePassword() {
    this.formGroupUpdatePassword = this.formBuilder.group(
      {
        password: ['', Validators.minLength(5)],
        passwordConfirm: ['', Validators.minLength(5)]
      });
  }


  formUpdateCliente () {
    this.id  = this.route.snapshot.params['id'];
    this.formGroupUpdateCliente =  this.formBuilder.group(
    {
      phone: [null,[Validators.required, Validators.minLength(11)]]
    });
  }

  formUpdateAddress () {
    this.id  = this.route.snapshot.params['id'];
    this.formGroupUpdateAddress =  this.formBuilder.group(
      {
        cep: ['', [Validators.required]],
        logradouro: ['',[Validators.required]],  
        numero: ['', [Validators.required]],
        complemento: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        localidade:['', [Validators.required]],
        uf: ['', [Validators.required]],
      });
  }

  onChangeEmail($event) {
    let email;
    this.newEmail = this.formGroupUpdateEmail.get('email').value;
    this.emailConfirm = this.formGroupUpdateEmail.get('emailConfirm').value;
    if (this.newEmail == this.emailConfirm) 
      {
        email = this.newEmail;
        this.registroUpdateEmailDTO.email = email;
        this.emailMsg = null;
        this.validEmailMsg = null;
      } else 
        {
          this.emailMsg = "ok";
        }
}

  updateEmail(registroform: NgForm) {
    this.button = true;
    this.sniper = "ok";

    this.registroService.updateEmail(this.registro.id, registroform)
      .subscribe(response =>
        {
          console.log(response);
          this.authService.logout();
          this.successUpdate = "ok"; 
        }, catchError=>
          {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.updateRegistroValue = "ok"
            this.presentErrorUpdate();
          });
  }

  onChangePassword($event) { 
    let password;
    this.newPassword = this.formGroupUpdatePassword.get('password').value;
    this.passwordConfirm = this.formGroupUpdatePassword.get('passwordConfirm').value;
      if (this.newPassword == this.passwordConfirm) 
      {
        password = this.newPassword;
        this.registroUpdatePassowordDTO.password = password;
        this.passwordMsg = null;
        this.validPasswordMsg = null;
      }
      else 
      {
       this.passwordMsg = "ok";
      }
  }
  
  updatePassword(registroform: NgForm) {
    this.button = true;
    this.sniper = "ok";

    this.registroService.updatePassword(this.registro.id, registroform)
      .subscribe(response=>
        {
          console.log(response);
          this.emailUpdateAccount();
          this.authService.logout();
        }, catchError=>
          {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.updateRegistroValue = "ok";  
            this.presentErrorUpdate();
          });
}

  updateCliente(clienteform: NgForm) {
    this.button = true;
    this.sniper = "ok";
   this.clienteService.update(this.cliente.id, clienteform)
   .subscribe(response =>
    {
      console.log(response);
      this.emailUpdateAccount();
    }, catchError=>
      {
        this.button = false;
        this.sniper = null;
        this.successUpdate = null;
        console.log(catchError);
        this.presentErrorUpdate();
      });
}

  updateAddress(addressform: NgForm) {
    this.button = true;
    this.sniper = "ok";
    this.enderecoService.update(this.registro.id, addressform)
    .subscribe(response =>
      {
        console.log(response);
        this.emailUpdateAccount();
      }, catchError=>
        {
          this.button = false;
          this.sniper = null;
          this.successUpdate = null;
          console.log(catchError);
          this.presentErrorUpdate();
        });
  }
  updateOnRegistro() {
    this.updateRegistroValue = null;
    this.button = false;
    this.validEmailMsg = "ok";
    this.validPasswordMsg = "ok";
  }

  updateOnCliente() {
    this.updateClienteValue = null;
    this.button = false;
  }

  updateOnAddress() {
    this.updateAddressValue = null;
    this.button = false;
  }

  
  getViaCep(){
    let cep = this.formGroupUpdateAddress.get('cep').value;
    this.clienteService.viaCep(cep)
    .subscribe(response=>
      {
        this.endereco = response;
      },
      catchError=>
        {
          this.presentEnderecoConfirm();
        }
      );
  }

  showPassword () {
    let show = "text"
    let hide = "password"
    this.senha = show;
    setTimeout(() => {
      this.senha = hide;
    }, 3000);
  }

  emailUpdateAccount() {
    let email =  this.registro.email;
    console.log(this.registro.email);
    this.registroService.emailUpdateAccount(email)
      .subscribe(response=>
        {
          this.successUpdate = "ok"; 
        },
        catchError=>
          {
            this.button = false;
            this.sniper = null;
            this.successUpdate= null;
            console.log(catchError);
          });
  }

  async presentEnderecoConfirm() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Não encontramos o cep que voce colocou',
      message: 'Caso erro continue insira os dados manualmente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentErrorUpdate() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      subHeader: 'Erro ao tenta atualizar',
      message: 'Caso erro continue, reinicei o app.',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  reload() {
    this.sniper = null;
    this.updateRegistroValue = "ok";
    this.updateClienteValue = "ok";
    this.updateAddressValue = "ok";
  }

  sucess() {
    this.successUpdate = null;
    this.router.navigate(['/home']);
    //this.button = false;
    //this.sniper = null;
    //this.successUpdate = null;
  }

  ShowPedidos() {
    this.router.navigate(['/dashboard/pedidos']);
  }

}
  