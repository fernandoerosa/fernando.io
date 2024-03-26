import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonToggle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderComponent, IonToggle, UserInfoComponent, BlogTileComponent, FooterComponent],
})
export class Tab1Page {
  constructor() {}
}
