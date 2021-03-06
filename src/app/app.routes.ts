import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecargasComponent } from './components/recargas/recargas.component';
import { RegistroComponent } from './components/registro/registro.component';
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'recargas', component: RecargasComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
