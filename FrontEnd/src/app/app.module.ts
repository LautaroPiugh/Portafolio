import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardSoftComponent } from './pages/hard-soft/hard-soft.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { BannerComponent } from './pages/banner/banner.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { LogComponent } from './pages/log/log.component';
import { HeadComponent } from './pages/head/head.component';
import { SocialmComponent } from './pages/socialm/socialm.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HardSoftComponent,
    AboutmeComponent,
    BannerComponent,
    EducationComponent,
    ExperienceComponent,
    LogComponent,
    HeadComponent,
    SocialmComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
