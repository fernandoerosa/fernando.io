import { Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { Tab1Page } from './tab1/tab1.page';

export const routes: Routes = [
  { 
    path: '', component: Tab1Page
  },
  { 
    path: 'blog-details', component: BlogDetailsComponent
  },
  { 
    path: 'blog-details/:id', component: BlogDetailsComponent
  },
];
