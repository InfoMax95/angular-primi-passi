import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: ':id',
        component: ContattoComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  // questo va sempre inserito come ultima path altrimenti rischiamo che prenda sempre questo
  {
    path: '**', // questo indica qualsiasi indirizzo diverso dai nostri
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
