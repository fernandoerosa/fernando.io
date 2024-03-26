import { Component, OnInit } from '@angular/core';
import { IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.scss'],
  imports: [IonButton, IonText]
})
export class BlogTileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
