import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsOnePage } from './news-one.page';

const routes: Routes = [
  {
    path: '',
    component: NewsOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsOnePageRoutingModule {}
