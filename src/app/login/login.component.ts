import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }


}
