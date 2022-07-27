import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componets/head/head.component';
import { LogoComponent } from './componets/logo/logo.component';
import { SocialmediaComponent } from './componets/socialmedia/socialmedia.component';
import { BannerComponent } from './componets/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LogoComponent,
    SocialmediaComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
