import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsOnePageRoutingModule } from './news-one-routing.module';

import { NewsOnePage } from './news-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsOnePageRoutingModule
  ],
  declarations: [NewsOnePage]
})
export class NewsOnePageModule {}
