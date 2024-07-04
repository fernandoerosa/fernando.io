import { Routes } from '@angular/router';
import { Tab1Page } from './components/tab1/tab1.page';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

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
