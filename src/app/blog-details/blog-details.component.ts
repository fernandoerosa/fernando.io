import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BloggerService } from '../services/blogger.service';
import { Blog } from '../interfaces/blog';
import { IonProgressBar, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../header/header.component";
import { UserInfoComponent } from "../user-info/user-info.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
    standalone: true,
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    providers: [
        BloggerService,
    ],
    imports: [IonContent,
        IonProgressBar,
        HeaderComponent, UserInfoComponent, FooterComponent]
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
        console.log("this.post")
        console.log(this.post)
        this.loading.set(false)
      },
      error: () => {

      }
    });
  }
}
