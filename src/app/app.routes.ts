import { Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogHomeComponent } from './components/blog/blog-home/blog-home.component';
import { Tab1Page } from './components/tab1/tab1.page';

export const routes: Routes = [
  {
    path: '', component: Tab1Page
  },
  {
    path: 'blog-home', component: BlogHomeComponent
  },
  {
    path: 'blog-details', component: BlogDetailsComponent
  },
  {
    path: 'blog-details/:id', component: BlogDetailsComponent
  },
];
