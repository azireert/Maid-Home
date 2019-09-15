import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaidListComponent} from './views/maid-list/maid-list.component';
import {PlanificationComponent} from './views/planification/planification.component';
import {MapComponent} from './views/map/map.component';
import {VisiteListComponent} from './views/visite-list/visite-list.component';
import {RegisterComponent} from './views/register/register.component';
import {AuthComponent} from './views/auth/auth.component';
import {AuthGuard} from './shared/services/service.guard';
import {MaidHomeComponent} from './views/maid-home/maid-home.component';
import {CommentaireComponent} from './shared/components/commentaire/commentaire.component';
import {MaidGuard} from './shared/services/service-maid.guard';
import {UtilisateurGuard} from './shared/services/service-utilisateur.guard';

const routes: Routes = [
  {
    path: 'connexion',
    component: AuthComponent
  },
  {
    path: 'inscription',
    component: RegisterComponent
  },
  {
    path: 'maids/:region',
    canActivate: [AuthGuard, MaidGuard],
    component: MaidListComponent
  },
  {
    path: 'commentaire/:id',
    canActivate: [AuthGuard, MaidGuard],
    component: CommentaireComponent
  },
  {
    path: 'acceuil',
    canActivate: [AuthGuard, UtilisateurGuard],
    component: MaidHomeComponent
  },
  {
    path: 'map',
    canActivate: [AuthGuard, MaidGuard],
    component: MapComponent
  },
  {
    path: 'menages',
    canActivate: [AuthGuard],
    component: VisiteListComponent
  },
  { path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  },
  {
    path: 'planification/:id',
    canActivate: [AuthGuard, MaidGuard],
    component: PlanificationComponent
  },
  {
    path: '**',
    redirectTo: '/connexion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
