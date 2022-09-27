import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteNewDTO } from '../../models/clienteNew.dto';
import { Endereco } from '../../models/endereco';
import { RegistroDTO } from '../../models/registro.dto';
import { ClienteService } from '../../services/cliente.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.page.html',
  styleUrls: ['./sigup.page.scss'],
})
export class SigupPage implements OnInit {
  formGroup: FormGroup;
  registro: RegistroDTO;
  cliente: ClienteDTO;
  endereco: Endereco;
  cep: string;
  _registroId: string;
  email: string;

  sniper : string;
  button = false;

  successUpdate: string;
  
  clienteNewDto: ClienteNewDTO =
  {
    registroId:  "",
    name: "",
    cpf: "",
    dateNasc: "",
    phone: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: ""
  };

  constructor(public clienteService: ClienteService,
    public registroService: RegistroService,
    public storageService: StorageService,
    public router: Router,
    public formBuilder: FormBuilder,
    public alertController: AlertController) { }
    
    ngOnInit() {
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email)
    {
      this.registroService.findByEmail(localUser.email)
      .subscribe(response=>
        {
          this.registro = response as RegistroDTO;
          this._registroId = this.registro.id;
          this.clienteNewDto.registroId = this._registroId;
          this.email = this.registro.email;
        }, catchError =>
            {
              if (catchError.status == 403)
                {
                  this.router.navigate(['/sigup']);
                } 
            }
        );
    }
  
    this.formGroup =  this.formBuilder.group(
      {
        name: ['', [Validators.maxLength(50)]],
        cpf: ['', [Validators.minLength(11)]],
        dateNasc: ['', [Validators.maxLength(8)]],
        phone: ['', [Validators.maxLength(11)]],
        cep: ['', [Validators.minLength(8)]],
        logradouro: ['', [Validators.maxLength(50)]],
        numero: ['', [Validators.maxLength(6)]],
        complemento: ['', [Validators.maxLength(50)]],
        bairro: ['', [Validators.maxLength(50)]],
        localidade: ['', [Validators.maxLength(50)]],
        uf: ['', [Validators.maxLength(2)]],
      });
  }

  getEndereco(){
    let cep = this.formGroup.get('cep').value;
    this.clienteService.viaCep(cep)
    .subscribe(response=>
      {
        this.endereco = response;
      },
        catchError => 
        {
          this.errorCep();
        });    
  }

  submitForm(){
    this.button = true;
    this.sniper = "ok";
    let name = this.formGroup.get('name').value;
    let cpf = this.formGroup.get('cpf').value;
    let dateNasc = this.formGroup.get('dateNasc').value;
    let phone = this.formGroup.get('phone').value;

    let cep = this.formGroup.get('cep').value;
    let logradouro = this.formGroup.get('logradouro').value;
    let numero = this.formGroup.get('numero').value;
    let complemento = this.formGroup.get('complemento').value;
    let bairro = this.formGroup.get('bairro').value;
    let localidade = this.formGroup.get('localidade').value;
    let uf = this.formGroup.get('uf').value;

    this.clienteNewDto.name = name;
    this.clienteNewDto.cpf = cpf;
    this.clienteNewDto.dateNasc = dateNasc;
    this.clienteNewDto.phone = phone;

    this.clienteNewDto.cep = cep;
    this.clienteNewDto.logradouro = logradouro;
    this.clienteNewDto.numero = numero;
    this.clienteNewDto.complemento = complemento;
    this.clienteNewDto.bairro = bairro;
    this.clienteNewDto.localidade = localidade;
    this.clienteNewDto.uf = uf;

    this.clienteService.insert(this.clienteNewDto)
    .subscribe(response =>
      {
        this.emailNewAccount();
      }, catchError=>
      {
        this.button = false;
        this.sniper = null;
        this.router.navigate(['/sigup']);
      });
  }

  emailNewAccount() {
    this.registroService.emailNewAccount(this.email)
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
  
  async errorCep() {
    const alert = await this.alertController.create(
      {
        cssClass: 'registration-success',
        subHeader: 'Endereço não encontrado !',
        message: 'Tente digita manualmente. ',
        buttons: [
          {
            text :'Continuar ',
            cssClass: 'secondary',
            handler: () =>
            {
              this.router.navigate(['/sigup']);
            }
          }
        ]
      }
    )
    await alert.present();
  }

}
