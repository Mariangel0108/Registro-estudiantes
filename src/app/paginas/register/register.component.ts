import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerObj: any = {
  "FullName": "",
  "CollageName": "",
  "Password": "",
  "Email": "",

};
http = inject(HttpClient)

onRegister (){
  debugger
  this.http.post("https://api.freeprojectapi.com/api/CollegeProject/AddNewUser", this.registerObj).subscribe((result:any)=>{
    alert("Registered Successfully")
    })
  }
}
