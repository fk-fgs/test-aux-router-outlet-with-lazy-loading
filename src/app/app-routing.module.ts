import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/feature1/page1', pathMatch: 'full' },
  {
    path: 'feature2',
    loadChildren: () => import('./modules/feature2/features2.module').then((m) => m.Feature2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
