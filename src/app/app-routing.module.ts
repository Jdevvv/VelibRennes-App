import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VelibListComponent } from './components/velib-list/velib-list.component';
import { VelibMapComponent } from './components/velib-map/velib-map.component';

const routes: Routes = [
  {
    path: '',
    component: VelibListComponent
  },
  {
    path: 'map',
    component: VelibMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
