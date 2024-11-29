import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { contactPageComponent } from './shared/components/contact/contact.component';

const routes: Routes = [
  /* {
    path: '',
    component: HomePagesComponent
  }, */
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: 'contact',
    component: contactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes), //forRoot es porque es el primero
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
