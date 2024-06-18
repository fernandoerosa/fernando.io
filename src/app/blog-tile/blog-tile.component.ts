import { Component, Input } from '@angular/core';
import { IonText, IonButton, IonCard, IonCardHeader, IonLabel } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.scss'],
  imports: [IonLabel, IonCardHeader, IonCard, IonButton, IonText]
})
export class BlogTileComponent {
  @Input() title: string = "";
  @Input() published: string = "";
  @Input() content: string = "";
  @Input() labels: string[] = [];

  constructor() { }

}
