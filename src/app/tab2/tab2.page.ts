import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from "../header/header.component";
import { UserInfoComponent } from "../user-info/user-info.component";
import { BlogTileComponent } from "../blog-tile/blog-tile.component";
import { FooterComponent } from "../footer/footer.component";
import { Blog } from '../interfaces/blog';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [IonProgressBar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderComponent, UserInfoComponent, BlogTileComponent, FooterComponent]
})
export class Tab2Page {
  @Input() post?: Blog;
}
