import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature2Page1Component } from './pages/page1/feature2-page1.component';
import { Feature2Page2Component } from './pages/page2/feature2-page2.component';

const routes: Routes = [
  {
    path: 'page1', component: Feature2Page1Component
  },
  {
    path: 'page2', component: Feature2Page2Component,
    outlet: 'aux1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule {}

