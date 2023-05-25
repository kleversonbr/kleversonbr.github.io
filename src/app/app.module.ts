import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { CodigoComponent } from './codigo/codigo.component';
import { RespostaComponent } from './resposta/resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    ComentarioComponent,
    CodigoComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
