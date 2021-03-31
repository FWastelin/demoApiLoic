import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCapacityComponent } from './components/pages/capacity/edit/edit.component';

import { ListingComponent } from './components/pages/capacity/listing/listing.component';
import { EditUserComponent } from './components/pages/edit-user/edit-user.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InfouserComponent } from './components/pages/infouser/infouser.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { Error404Component } from './components/shared/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path: 'capacity', component: ListingComponent},
  {path: 'editcapacity/:id', component: EditCapacityComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: 'editUser/:id', component: EditUserComponent},
  {path: 'infouser/:id', component : InfouserComponent},

  {path : 'notfound', component: Error404Component},
  {path : '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
