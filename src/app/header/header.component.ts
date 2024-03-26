import { Component, OnInit } from '@angular/core';
import { IonToggle, IonIcon, IonText, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonToggle, IonIcon, IonText, IonButton]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
}
