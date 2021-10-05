import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegisterModel } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private messageService: MessageService
  ) { }

  isProcessing: boolean = false;
  registerModel: RegisterModel = {
    id: 0,
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  public register(): void {
    this.isProcessing = true;
    this.registerService.register(this.registerModel).subscribe(
      data => {
        if (data[0] == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Register Successful',
            detail: 'You have successfully registered in your account.'
          });

          setTimeout(() => {
            location.reload();
          }, 500);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Register Failed',
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
