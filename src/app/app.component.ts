import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Google Maps Integration';
  address: string = '';
  urlSafe: SafeResourceUrl | undefined;
  activeMap: boolean = false;
  // testLocation: string = "https://maps.google.com/maps?q=28.6139,77.2090&output=embed"

  constructor(private sanitizer: DomSanitizer) {}

  getAddress() {
    this.activeMap = true;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.address}&t=m&z=15&output=embed&iwloc=near`);
  }

  cleanAddress() {
    this.address = '';
    this.activeMap = false;
  }
}
