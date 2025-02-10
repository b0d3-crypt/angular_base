import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moduleData from '../../../assets/module.json';
import { Feature } from '../../models/interfaces/feature.interface';
import { Module } from '../../models/interfaces/module.interface';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() isMenuExpanded = false;
  @Output() moduleSelected = new EventEmitter<Feature[]>(); 

  feature: Feature[] = [];
  module: Module[] = [];
  selectedModule: string = '';
  selectedFeatures: Feature[] = [];

  ngOnInit(): void {
    console.log(moduleData)
    this.module = moduleData;
    if (moduleData.length > 0) {
      this.feature = moduleData[0].features || []; 
      this.featureSelecionada(); 
    }
  }

  featureSelecionada() {
    this.moduleSelected.emit(this.feature);
  }

  onModuleClick(mod: Module): void { 
    this.feature = mod.features || [];
    this.featureSelecionada();
  }

  onFeaturesUpdated(features: Feature[]): void {
    this.selectedFeatures = features;
  }
}
