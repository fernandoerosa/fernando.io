import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonText, IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { FooterComponent } from '../footer/footer.component';
import { BloggerService } from '../services/blogger.service';
import { Blog } from '../interfaces/blog';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [
    BloggerService
  ],
  imports: [
    IonProgressBar, 
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    HeaderComponent,
    IonToggle,
    UserInfoComponent,
    BlogTileComponent,
    FooterComponent,
    IonButton,
    RouterLink, 
    RouterLinkActive
  ],
})
export class Tab1Page {
  posts: Array<Blog> = [];
  loading = signal(false);

  constructor(private service: BloggerService) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.loading.set(true);
    this.service.getPosts()
      .subscribe({
        next: (e) => {
          this.loading.set(false);
          this.posts = e.items;
          console.log(this.posts);
        },
        error: () => {
          console.log("error");
        }
      });
  }
}
