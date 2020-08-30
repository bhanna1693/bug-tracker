import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: 'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule)},
  {path: 'stonks', loadChildren: () => import('./stonks/stonks.module').then(m => m.StonksModule)},
  // {path: 'login', component: null},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
