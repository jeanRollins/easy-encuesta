import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: './pages/index/index.module#IndexPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'res-encuesta', loadChildren: './pages/res-encuesta/res-encuesta.module#ResEncuestaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
