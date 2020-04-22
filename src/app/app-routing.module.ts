import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  {
    path: 'listmedecins',
    loadChildren: () => import('./listmedecins/listmedecins.module').then( m => m.ListmedecinsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'listedelegues',
    loadChildren: () => import('./listedelegues/listedelegues.module').then( m => m.ListedeleguesPageModule)
  },
  {
    path: 'detaildelegue/:id',
    loadChildren: () => import('./detaildelegue/detaildelegue.module').then( m => m.DetaildeleguePageModule)
  },
  {
    path: 'detailmedecin/:id',
    loadChildren: () => import('./detailmedecin/detailmedecin.module').then( m => m.DetailmedecinPageModule)
  },
  {
    path: 'listevisite/:id',
    loadChildren: () => import('./listevisite/listevisite.module').then( m => m.ListevisitePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
