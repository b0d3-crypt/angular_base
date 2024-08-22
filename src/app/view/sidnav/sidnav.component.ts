import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  activeModuleIndex: number | null = null;
  modules: Module[] = [];
  isMenuExpanded = false;

  ngOnInit() {
    this.modules = moduleData;
  }

  setActiveModule(index: number): void {
    this.activeModuleIndex = index;
  }

  clearActiveModule(): void {
    this.activeModuleIndex = null;
  }

  toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.clearActiveModule(); 
  }
}
