import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { ButtonLimparComponent } from './components/button-limpar/button-limpar.component';
import { ButtonOptionsComponent } from './components/button-options/button-options.component';
import { ButtonPesquisarComponent } from "./components/button-pesquisar/button-pesquisar.component";
import { EmpresaTableComponent } from './components/empresa-table/empresa-table.component';
import { TextEmpresaComponent } from './components/text-empresa/text-empresa.component';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [
    EmpresaTableComponent, 
    TextEmpresaComponent, 
    SHARED_IMPORTS, 
    ButtonPesquisarComponent,
    ButtonLimparComponent,
    ButtonOptionsComponent
  ],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent {

}
