import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feature } from '../../models/interfaces/feature.interface';

@Component({
  selector: 'app-sidnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidnav.component.html',
  styleUrl: './sidnav.component.scss'
})
export class SidnavComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>(); 
  @Input() featureSelected: Feature[] = [];
  activeModuleIndex: number | null = null;
  feature: Feature[] = [];
  isMenuExpanded = false;

  ngOnInit() {
    this.feature = this.featureSelected;
  }

  clearActiveModule(): void {
    this.activeModuleIndex = null;
  }

  toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.menuToggled.emit(this.isMenuExpanded)
    this.clearActiveModule(); 
  }

  setActiveModule(index: number, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation(); 
    }
    if (!this.isMenuExpanded) {
      this.toggleMenu();
    }
    this.activeModuleIndex = this.activeModuleIndex === index ? null : index;
  }
}
