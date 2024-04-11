import { Component } from '@angular/core';
import { AdicionalesComponent } from '../widgets/adicionales/adicionales.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdicionalesComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
