import { RouterModule, Routes } from '@angular/router';
import { ConsultaEmpenhoComponent } from './consulta-empenho/consulta-empenho.component';

const appRoutes: Routes  = [
	{ path: '', component: ConsultaEmpenhoComponent},
	{ path: 'incluir_empenho', component: ConsultaEmpenhoComponent},
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);