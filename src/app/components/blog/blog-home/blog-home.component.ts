import { Component, OnInit, signal } from '@angular/core';
import { IonProgressBar, IonContent } from '@ionic/angular/standalone';
import { Blog } from 'src/app/interfaces/blog';
import { BloggerService } from 'src/app/services/blog/blogger.service';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { RouterLink } from '@angular/router';
import { UserInfoComponent } from "../../user-info/user-info.component";
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
  imports: [IonContent,
    BlogTileComponent,
    IonProgressBar,
    RouterLink, UserInfoComponent, HeaderComponent, FooterComponent],
  providers: [
    BloggerService
  ],
  standalone: true,
})
export class BlogHomeComponent {
  posts: Array<Blog> = [];
  loading = signal(false);
  constructor(
    private service: BloggerService
  ) {
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
