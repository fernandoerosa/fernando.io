import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonText, IonButton, IonProgressBar, IonCard, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonInput, IonTextarea, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BlogTileComponent } from '../blog/blog-tile/blog-tile.component';
import { FooterComponent } from '../footer/footer.component';
import { BloggerService } from '../../services/blog/blogger.service';
import { Blog } from '../../interfaces/blog';
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
    IonCardTitle, 
    IonCardHeader, 
    IonCardContent, 
    IonTextarea, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonAccordionGroup, 
    IonAccordion,
    IonCard,
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


  constructor() {
  }

}
