import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component'
import { GetContactComponent } from './get-contact/get-contact.component'
import { EditContactComponent } from './edit-contact/edit-contact.component'
const routes: Routes = [
  { path: 'contacts/add', component: CreateComponent },
  { path: 'contacts', component: GetContactComponent },
  { path: 'edit/:_id', component: EditContactComponent },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
