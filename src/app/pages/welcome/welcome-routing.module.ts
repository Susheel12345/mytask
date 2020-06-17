import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './../../create/create.component'
import { GetContactComponent } from './../../get-contact/get-contact.component'
import { EditContactComponent } from './../../edit-contact/edit-contact.component'
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  // { path: 'contacts/add', component: CreateComponent },
  // { path: 'contacts', component: GetContactComponent },
  // { path: 'edit/:_id', component: EditContactComponent },
  //  { path: '', pathMatch: 'full', redirectTo: '/contacts' },
  { path: '', component: WelcomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }



