import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MenubarModule } from 'primeng/menubar';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutPageComponent,
    ContactPageComponent,
    ResumePageComponent,
    MainPageComponent,
    HomePageComponent,
    ExperiencePageComponent,
    PortfolioComponent,
    FooterComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
