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
  mod: Module | undefined 

  ngOnInit(): void {
    console.log(moduleData)
    this.module = moduleData;
    if (moduleData.length > 0) {
      this.mod = moduleData[0]; 
      this.featureSelecionada(); 
    }
  }

  featureSelecionada() {
    this.moduleSelected.emit(this.mod?.features);
    this.selectedModule = this.mod?.module ?? ''; 

  }

  onModuleClick(mod: Module): void { 
    this.selectedModule = mod.module ?? '';
    this.mod = mod || undefined;
    this.featureSelecionada();
  }

  onFeaturesUpdated(features: Feature[]): void {
    this.selectedFeatures = features;
  }
}
