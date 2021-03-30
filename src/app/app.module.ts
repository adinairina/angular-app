import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './demo.service';
import { AppRoutingModule } from './app-routing.module';

import { PostComponent } from './post.component';
import { ContactComponent } from './contact.component';
import { PostDetailsComponent } from './post-details.component';
import { PetComponent } from './pet.component';
import { ListComponentComponent } from './list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    PostComponent,
    PetComponent,
    ContactComponent,
    PostDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
