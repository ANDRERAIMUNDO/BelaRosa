import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { API_CONFIG } from 'src/config/config';
import { ClienteDTO } from '../../models/cliente.dto';
import { RegistroDTO } from '../../models/registro.dto';
import { ClienteService } from '../../services/cliente.service';
import { EnderecoService } from '../../services/endereco.service';
import { PhotoService } from '../../services/photo.service';
import { RegistroService } from '../../services/registro.service';
import { StorageService } from '../../services/storage.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.page.html',
  styleUrls: ['./profile-photo.page.scss'],
})
export class ProfilePhotoPage {
  animation = true;
  picture: string;
  registro : RegistroDTO;
  id: String = "";
  cliente : ClienteDTO;
  updateRegistroValue: boolean;
  DateSlice: string;
  dia: string;
  ano: string;
  mes: string;

  constructor( public storageService:  StorageService,
    public registroService: RegistroService,
    public clienteService: ClienteService,
    public enderecoService: EnderecoService,
    public loadingController: LoadingController,
    public alertController : AlertController,
    public route: ActivatedRoute,
    public router: Router,
    public photoService: PhotoService,
    public camera: Camera ){}

  ionViewWillEnter() {
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

  getImageIfExists(){
    this.registroService.getImageFromBucket(this.registro.id)
      .subscribe(response =>
        {
          this.registro.imageUrl = `${API_CONFIG.bukectBaseUrl}/profiles/cp${this.registro.id}.png`;
        },
          catchError=>{console.log(catchError)});
  }
  
  sliceTypeCliente() {
    this.DateSlice = this.registro.cliente.dateNasc;
    this.dia = this.DateSlice.slice(0,2);  
    this.mes = this.DateSlice.slice(2,4);
    this.ano = this.DateSlice.slice(4,8);
  }

  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    })
  }
  
  getCameraPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.picture = 'data:image/png;base64,' + imageData;
    }, (catchError) => {
      this.presentGetPicture();
      console.log(catchError);
    });
    } 
  
  sendPicture() {
    this.photoService.uploadPicture(this.picture)
      .subscribe(response => {
        this.picture = null;
        this.getImageIfExists();

        setTimeout(()=> {
          if (this.animation == true) {
            this.router.navigate(['/dashboard/circle-upload-image']);
          }
        },1000);
      },
      (catchError ) => {
        console.log("error" + catchError);
        this.router.navigate(['/dashboard/profile']);
        });
  }

  async presentGetPicture() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Erro ao carregar imagem.',
      buttons: ['OK']
    });
  }
  cancel() {
      this.picture = null;
    }
}