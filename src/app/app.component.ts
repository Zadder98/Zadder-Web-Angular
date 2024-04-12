import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { LoginComponent } from './login/login.component';




//--------decorador @Component 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
    NavbarComponent, HomeComponent, DocumentosComponent, 
    ContactoComponent, FooterComponent, LoginComponent ],


  templateUrl: './app.component.html',
  styles:''
}) 

//---que finalmente se aplica aca
export class AppComponent {
 
}
