import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HerosSectionComponent } from './components/heros-section/heros-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    HerosSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingpageModule { }
