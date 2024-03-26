import { Component, OnInit } from '@angular/core';
import { IonButton, IonToggle, IonText } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports:[IonButton, IonToggle, IonText]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
