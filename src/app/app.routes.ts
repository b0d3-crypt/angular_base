import { Routes } from '@angular/router';
import { EmpresasComponent } from './view/cadastros/empresas/empresas.component';
import { UsuarioComponent } from './view/cadastros/usuario/usuario.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'principal/pessoas', component: UsuarioComponent }, // Rota para Pessoas
    { path: 'principal/empresas', component: EmpresasComponent },
    { path: 'principal/404', component: PageNotFoundComponent },// Rota para Empresas
    
    { path: '**', redirectTo: 'principal/404', pathMatch: 'full' }
];
