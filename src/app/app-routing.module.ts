import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {CreationComponent} from './creation/creation.component';

const routes: Routes = [
  {path: 'main', component: MainContentComponent},
  {path: 'creation', component: CreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
