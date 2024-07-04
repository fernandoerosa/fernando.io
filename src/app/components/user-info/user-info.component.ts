import { Component, OnInit } from '@angular/core';
import { IonText } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  imports: [IonText]
})
export class UserInfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
