import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonText, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { FooterComponent } from '../footer/footer.component';
import { BloggerService } from '../services/blogger.service';
import { Blog } from '../interfaces/blog';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [
    BloggerService
  ],
  imports: [IonText, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderComponent, IonToggle, UserInfoComponent, BlogTileComponent, FooterComponent, IonButton],
})
export class Tab1Page {
  posts: Array<Blog> = [];
  loading = signal(false);

  constructor(private service: BloggerService) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.service.getPosts()
      .subscribe({
        next: (e) => {
          this.posts = e.items;
          console.log(this.posts);
        },
        error: () => {
          console.log("error");
        }
      });
  }
}
