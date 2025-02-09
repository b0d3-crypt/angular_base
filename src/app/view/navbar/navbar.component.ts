import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sections = ['Principal', 'Configurações', 'Relatórios'];

  @Output() sectionSelected = new EventEmitter<string>();

  selectSection(section: string): void {
    this.sectionSelected.emit(section);
  }
}
