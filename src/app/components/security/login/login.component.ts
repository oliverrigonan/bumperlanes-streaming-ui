import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private messageService: MessageService
  ) { }

  isProcessing: boolean = false;
  loginModel: LoginModel = {
    email: "",
    password: ""
  };

  login(): void {
    this.isProcessing = true;
    this.loginService.login(this.loginModel).subscribe(
      data => {
        if (data[0] == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Login Successful',
            detail: 'You have successfully logged in your account.'
          });

          setTimeout(() => {
            this.router.navigate(['/application']);
          }, 500);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed',
            detail: data[1]
          });

          this.isProcessing = false;
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
