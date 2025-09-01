import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { Router, Event, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';


  userService = inject(UserService);
  router = inject(Router);

  onlogoff() {
    localStorage.removeItem('StudentId');
    this.router.navigateByUrl('/home');
  }
}
