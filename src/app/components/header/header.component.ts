import { Component, OnInit } from '@angular/core';
import { IonToggle, IonIcon, IonText, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonToggle, IonIcon, IonText, IonButton, RouterLink]
})
export class HeaderComponent  implements OnInit {
  
  toggleInitState = false;

  constructor() { }

  ngOnInit() {
    this.initTheme();
  }

  initializeDarkPalette(isDark: boolean) {
    this.toggleInitState = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);
    window.localStorage?.setItem("theme", ev.detail.checked ? "dark" : "light");
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  private initTheme() {
    const isDark = window.localStorage?.getItem("theme");

    this.initializeDarkPalette(isDark === "dark");
  }
}
