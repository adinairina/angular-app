import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ListComponentComponent } from './list-component.component';
import { PostDetailsComponent } from './post-details.component';


const routes: Routes=[
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "list", component: ListComponentComponent},
  {path: "post-details/:id", component: PostDetailsComponent},
  {path: "contact", component: ContactComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
