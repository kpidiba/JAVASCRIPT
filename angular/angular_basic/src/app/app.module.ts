import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { FormComponent } from './form/form.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormBComponent } from './form-b/form-b.component';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    FormComponent,
    PostListComponent,
    FormBComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot([
    //   {path:'posts',component:PostComponent},
    //   {path:'postlist',component:PostListComponent},
    //   {path:'form',component:FormComponent},
    //   {path:'single',component:SingleComponent},
    //   {path:'single/:id/:title',component:SingleComponent}
    // ]),
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
