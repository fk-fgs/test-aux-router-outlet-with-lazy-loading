import { NgModule } from '@angular/core';

import { Feature1Page1Component } from './pages/page1/feature1-page1.component';
import { Feature1Page2Component } from './pages/page2/feature1-page2.component';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  declarations: [
    Feature1Page1Component,
    Feature1Page2Component
  ],
  imports: [Feature1RoutingModule],
})
export class Feature1Module {}
