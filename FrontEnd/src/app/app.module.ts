import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeadComponent } from './componets/head/head.component';
import { LogoComponent } from './componets/logo/logo.component';
import { SocialmediaComponent } from './componets/socialmedia/socialmedia.component';
import { BannerComponent } from './componets/banner/banner.component';
import { AcercadeComponent } from './componets/acercade/acercade.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { EducacionComponent } from './componets/educacion/educacion.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { PpComponent } from './componets/pp/pp.component';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LogoComponent,
    SocialmediaComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    PpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
