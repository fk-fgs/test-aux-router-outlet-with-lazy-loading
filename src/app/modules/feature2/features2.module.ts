import { NgModule } from '@angular/core';

import { Feature2Page1Component } from './pages/page1/feature2-page1.component';
import { Feature2Page2Component } from './pages/page2/feature2-page2.component';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  declarations: [
    Feature2Page1Component,
    Feature2Page2Component
  ],
  imports: [Feature2RoutingModule],
})
export class Feature2Module {}
