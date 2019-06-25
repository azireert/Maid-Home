import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaidListComponent} from './views/maid-list/maid-list.component';
import {PlanificationComponent} from './views/planification/planification.component';
import {MapComponent} from './views/map/map.component';
import {VisiteListComponent} from './views/visite-list/visite-list.component';

const routes: Routes = [
  {
    path: 'maids/:region',
    component: MaidListComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'menages',
    component: VisiteListComponent
  },
  { path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  },
  {
    path: 'planification/:id',
    component: PlanificationComponent
  },
  {
    path: '**',
    redirectTo: '/map'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
