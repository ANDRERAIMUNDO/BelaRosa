import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ErrorInterceptor } from './interceptors/httpError.interceptor';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { CategoriaService } from './services/categoria.service';
import { RegistroService } from './services/registro.service';
import { httpAuthInterceptor } from './interceptors/httpAuth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { ProdutoService } from './services/produto.service';
import { CardService } from './services/card.service';
import { EnderecoService } from './services/endereco.service';
import { PedidoService } from './services/pedido.service';
import { DescricaoService } from './services/descricao.service';
import { PhotoService } from './services/photo.service';
import { ImageUtilService } from './services/ ImageUtilService';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Camera } from '@ionic-native/camera/ngx';
import { NgxMercadopagoModule } from 'ngx-mercadopago';
import { MpService } from './services/mp.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production
      }),
      NgxMercadopagoModule.forRoot({
        publishKey: 'TEST-1ce60a51-a522-46a6-ac55-f1858b6699ff',
        pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
    })
    ],
  providers: [
        { provide: RouteReuseStrategy,
          useClass: IonicRouteStrategy
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        },  
        {
          provide: HTTP_INTERCEPTORS,
          useClass : httpAuthInterceptor,
          multi: true
        },
        {
          provide: Window, 
          useValue: window
        },
        AuthService,
        StorageService,
        CategoriaService,
        RegistroService,
        ClienteService,
        ProdutoService,
        CardService,
        EnderecoService,
        PedidoService,
        DescricaoService,
        PhotoService,
        ImageUtilService,
        Camera,
        MpService,
        Clipboard
      ],
  bootstrap: [AppComponent],
})
export class AppModule {}
