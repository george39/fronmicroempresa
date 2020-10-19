import { EgresosComponent } from './components/egresos/egresos.component';
import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { ListEgresosComponent } from './components/egresos/list-egresos.component';
import { EditEgresoComponent } from './components/egresos/edit-egreso.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { ListIngresosComponent } from './components/ingresos/list-ingresos.component';
import { CalculosComponent } from './components/calculos/calculos.component';



const appRoutes: Routes = [
    {path: '', component: EgresosComponent},
    {path: 'egresos', component: EgresosComponent},
    {path: 'listar-egresos', component: ListEgresosComponent},
    {path: 'editar-egresos', component: EditEgresoComponent},
    {path: 'ingresos', component: IngresosComponent},
    {path: 'listar-ingresos', component: ListIngresosComponent},
    {path: 'calculos', component: CalculosComponent},
    {path: '**', component: EgresosComponent}

];


export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
