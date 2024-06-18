import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonProgressBar } from '@ionic/angular/standalone';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Blog } from '../interfaces/blog';
import { BloggerService } from '../services/blogger.service';
import { UserInfoComponent } from "../user-info/user-info.component";

@Component({
    standalone: true,
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    providers: [
        BloggerService,
    ],
    imports: [
        IonContent,
        IonProgressBar,
        HeaderComponent, UserInfoComponent, FooterComponent
      ]
})
export class BlogDetailsComponent implements OnInit {
  id?: string;
  post?: Blog;
  loading = signal(false);

  constructor(private route: ActivatedRoute, private service: BloggerService) { }

  ngOnInit(): void {
    this.loading.set(true)
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.service.getOnePost(this.id).subscribe({
      next: (post) => {
        this.post = post;
        console.log(this.post.content);
        this.loading.set(false)
      },
      error: () => {

      }
    });
  }
}
