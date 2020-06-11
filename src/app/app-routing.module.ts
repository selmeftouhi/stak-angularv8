import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
// import {AuthenticationGuard} from './core';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: {}, canActivate: [/*AuthenticationGuard*/] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', data: {} },
  // { path: 'home', component: HomeComponent},
  { path: 'not-found', component: NotFoundComponent, data: {} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    //  HomeComponent,
    NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
