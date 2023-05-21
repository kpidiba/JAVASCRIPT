import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormComponent } from './form/form.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'form', component: FormComponent },
  { path: 'single', component: SingleComponent },
  { path: 'single/:id/:title', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
