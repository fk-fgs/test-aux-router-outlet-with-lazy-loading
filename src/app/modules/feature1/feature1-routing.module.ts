import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature1Page1Component } from './pages/page1/feature1-page1.component';
import { Feature1Page2Component } from './pages/page2/feature1-page2.component';

const routes: Routes = [
  {
    path: 'feature1/page1', component: Feature1Page1Component
  },
  {
    path: 'feature1/page2', component: Feature1Page2Component,
    outlet: 'aux1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule {}

