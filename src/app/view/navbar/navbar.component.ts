import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moduleData from '../../../assets/module.json';
import { Feature } from '../../models/interfaces/feature.interface';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() isMenuExpanded = false;
  @Output() moduleSelected = new EventEmitter<Feature[]>(); 

  feature: Feature[] = [];

  ngOnInit(): void {
    if (moduleData.length > 0) {
      this.feature = moduleData[0].features || []; 
      this.featureSelecionada(); 
    }
  }

  featureSelecionada() {
    this.moduleSelected.emit(this.feature);
  }
}
