import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import moduleData from '../../../assets/module.json';
import { Module } from '../../models/interfaces/module.interface';

@Component({
  selector: 'app-sidnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidnav.component.html',
  styleUrl: './sidnav.component.scss'
})
export class SidnavComponent implements OnInit {
  @Output() menuToggled = new EventEmitter<boolean>(); 

  activeModuleIndex: number | null = null;
  modules: Module[] = [];
  isMenuExpanded = false;

  ngOnInit() {
    this.modules = moduleData;
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
      event.stopPropagation(); // Evita que o clique em um subitem afete o menu principal
    }
  
    this.activeModuleIndex = this.activeModuleIndex === index ? null : index;
  }
}
