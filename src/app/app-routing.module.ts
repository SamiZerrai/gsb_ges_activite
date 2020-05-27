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
  {
    path: 'listetypecadeaux',
    loadChildren: () => import('./listetypecadeaux/listetypecadeaux.module').then( m => m.ListetypecadeauxPageModule)
  },
  {
    path: 'listetypeformation',
    loadChildren: () => import('./listetypeformation/listetypeformation.module').then( m => m.ListetypeformationPageModule)
  },
  {
    path: 'listetyperemboursement',
    loadChildren: () => import('./listetyperemboursement/listetyperemboursement.module').then( m => m.ListetyperemboursementPageModule)
  },
  {
    path: 'remboursementdeleguemedical',
    loadChildren: () => import('./remboursementdeleguemedical/remboursementdeleguemedical.module').then( m => m.RemboursementdeleguemedicalPageModule)
  },
  {
    path: 'remboursementdeleguemedicalperiode',
    loadChildren: () => import('./remboursementdeleguemedicalperiode/remboursementdeleguemedicalperiode.module').then( m => m.RemboursementdeleguemedicalperiodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
