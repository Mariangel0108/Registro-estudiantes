import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  LoginForm: FormGroup = new FormGroup({
    Email: new FormControl (""),
    Password: new FormControl ("")
  });

    UserService = inject(UserService);

  onlogin (){
    debugger;
    const fromvalue = this.LoginForm.value;

    this.UserService.onUserLogin(fromvalue).subscribe ({

      next: (res:any) => {
        debugger;
        localStorage.setItem('StudentId', res.userId);
        alert("Login exitoso");
      },
      error: () => {
        debugger;
        alert("Error en el login");
      }
    })
  }
}
