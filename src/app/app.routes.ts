import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: "Crew Dashboard" },
  { path: 'card/:cardId', component: CardComponent, title:'Crew Card Page'},
  {path:'**',
    component:NotFoundComponent
  }
];
