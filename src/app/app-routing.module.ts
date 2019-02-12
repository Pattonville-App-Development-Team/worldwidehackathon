import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreationComponent} from './creation/creation.component';
import {SidenavComponent} from './sidenav/sidenav.component';

const routes: Routes = [
  {path: 'main', component: SidenavComponent},
  {path: 'creation', component: CreationComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
