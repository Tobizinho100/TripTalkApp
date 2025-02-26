import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FooterModule } from 'src/app/components/footer/footer.components.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomeModule {}