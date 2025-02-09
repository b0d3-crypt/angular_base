import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Feature } from './models/interfaces/feature.interface';
import { NavbarComponent } from './view/navbar/navbar.component';
import { SidnavComponent } from "./view/sidnav/sidnav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidnavComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuExpanded = false;

  features: Feature[] = []; 

  ngOnInit() {
    this.features = [];
  }

  onFeaturesReceived(features: Feature[]) {
    this.features = features; 
  }

}
