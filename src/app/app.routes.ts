import { Routes } from '@angular/router';
import { EmpresasComponent } from './view/cadastros/empresas/empresas.component';
import { UsuarioComponent } from './view/cadastros/usuario/usuario.component';

export const routes: Routes = [
    { path: 'principal/pessoas', component: UsuarioComponent }, // Rota para Pessoas
    { path: 'principal/empresas', component: EmpresasComponent }, // Rota para Empresas
    
    { path: '**', redirectTo: 'principal/pessoas', pathMatch: 'full' }
];
