import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resuspension',
    loadChildren: () => import('./calc_pages/Bio/resuspension/resuspension.module').then( m => m.ResuspensionPageModule)
  },
  {
    path: 'atom-name',
    loadChildren: () => import('./calc_pages/General/atom-name/atom-name.module').then( m => m.AtomNamePageModule)
  },
  {
    path: 'protein-solubility',
    loadChildren: () => import('./calc_pages/Bio/protein-solubility/protein-solubility.module').then( m => m.ProteinSolubilityPageModule)
  },
  {
    path: 'percentionic',
    loadChildren: () => import('./calc_pages/General/percentionic/percentionic.module').then( m => m.PercentionicPageModule)
  },
  {
    path: 'electronconfiguration',
    loadChildren: () => import('./calc_pages/General/electronconfiguration/electronconfiguration.module').then( m => m.ElectronconfigurationPageModule)
  },
  {
    path: 'chemname',
    loadChildren: () => import('./calc_pages/General/chemname/chemname.module').then( m => m.ChemnamePageModule)
  },
  {
    path: 'apk',
    loadChildren: () => import('./calc_pages/General/apk/apk.module').then( m => m.ApkPageModule)
  },
  {
    path: 'atomicmass',
    loadChildren: () => import('./calc_pages/General/atomicmass/atomicmass.module').then( m => m.AtomicmassPageModule)
  },
  {
    path: 'percentcomposition',
    loadChildren: () => import('./calc_pages/General/percentcomposition/percentcomposition.module').then( m => m.PercentcompositionPageModule)
  },
  {
    path: 'electronegativity',
    loadChildren: () => import('./calc_pages/General/electronegativity/electronegativity.module').then( m => m.ElectronegativityPageModule)
  },
  {
    path: 'mme',
    loadChildren: () => import('./calc_pages/Bio/mme/mme.module').then( m => m.MMEPageModule)
  },
  {
    path: 'enzymeactivity',
    loadChildren: () => import('./calc_pages/Bio/enzymeactivity/enzymeactivity.module').then( m => m.EnzymeactivityPageModule)
  },
  {
    path: 'isoelectric',
    loadChildren: () => import('./calc_pages/Bio/isoelectric/isoelectric.module').then( m => m.IsoelectricPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
