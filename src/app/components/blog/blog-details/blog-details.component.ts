import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonProgressBar, IonText } from '@ionic/angular/standalone';
import { Blog } from 'src/app/interfaces/blog';
import { BloggerService } from 'src/app/services/blog/blogger.service';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { UserInfoComponent } from '../../user-info/user-info.component';

@Component({
    standalone: true,
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    providers: [
        BloggerService,
    ],
    imports: [
      IonText, 
      IonContent,
      IonProgressBar,
      HeaderComponent, 
      UserInfoComponent, 
      FooterComponent
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
