import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './../../app-settings';
import { RegisterModel } from './../../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
  ) { }

  public defaultAPIURLHost: string = this.appSettings.APIURLHost;
  public options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  public register(registerModel: RegisterModel): Observable<[boolean, any]> {
    return new Observable<[boolean, any]>((observer) => {
      let url = this.defaultAPIURLHost + "/api/register";
      let body = "name=" + registerModel.name +
        "&email=" + registerModel.email +
        "&password=" + registerModel.password +
        "&password_confirmation=" + registerModel.confirmPassword;

      this.httpClient.post(url, body, this.options).subscribe(
        response => {
          let data = response;

          observer.next([true, data]);
          observer.complete();
        },
        error => {
          observer.next([false, error["error"].error_description]);
          observer.complete();
        });
    });
  }
}
