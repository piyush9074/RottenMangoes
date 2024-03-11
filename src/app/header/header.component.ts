import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor( private router:Router, private authService:AuthserviceService) {
    
   }
  
logout() {
  this.authService.logout();
}
goToHome() {
  this.router.navigate(['home']);
}

}
