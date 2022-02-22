import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  isConnect;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.isConnect = this.authService.isConnect();
    console.log(this.isConnect);
    console.log(this.user.role);
  }

  logout() {
    this.isConnect = false;
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
