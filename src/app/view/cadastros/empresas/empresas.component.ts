import { Component } from '@angular/core';
import { EmpresaTableComponent } from './components/empresa-table/empresa-table.component';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [EmpresaTableComponent],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent {

}
