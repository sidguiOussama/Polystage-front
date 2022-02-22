import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm?: FormGroup;
  user: any;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userRole: new FormControl('', Validators.required)
    });
  }

  OnSubmit() {
    this.user = {
      password: this.userForm?.get('password')?.value,
      email: this.userForm?.get('email')?.value,
      userRole: this.userForm?.get('userRole')?.value,
    };
    this.authService.login(this.user.email, this.user.password, this.user.userRole).subscribe(
      (data: any) => {
        if (data.status === 'Success' && data.data != null) {
          localStorage.setItem('isAuth', 'true');
          localStorage.setItem('credentials' , JSON.stringify({login: this.user.login , password: this.user.password, id: data.data.id,
                                                                     role: this.user.userRole}));
          this.router.navigate(['/internships/' + data.data.id])
            .then(() => {
              window.location.reload();
            });
        } else {
          this.toastr.error('Authentification Failed, Try Again');
        }
      }

    );
  }

}
