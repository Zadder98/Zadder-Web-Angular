import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [


    {path:"",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"documentos",component:DocumentosComponent},
    {path:"contacto",component:ContactoComponent},
    {path:"login",component:LoginComponent},
];

