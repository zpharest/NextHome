import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./page/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-donate',
    loadChildren: () => import('./page/add-donate/add-donate.module').then( m => m.AddDonatePageModule)
  },
  {
    path: 'minhas-doacoes',
    loadChildren: () => import('./page/minhas-doacoes/minhas-doacoes.module').then( m => m.MinhasDoacoesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./page/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'doacoes',
    loadChildren: () => import('./page/doacoes/doacoes.module').then( m => m.DoacoesPageModule)
  },
  {
    path: 'donation-details',
    loadChildren: () => import('./page/donation-details/donation-details.module').then( m => m.DonationDetailsPageModule)
  },

  {
    path: 'delete-donation',
    loadChildren: () => import('./page/delete-donation/delete-donation.module').then( m => m.DeleteDonationPageModule)
  },  {
    path: 'edit-donation',
    loadChildren: () => import('./page/edit-donation/edit-donation.module').then( m => m.EditDonationPageModule)
  },


  
   




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
