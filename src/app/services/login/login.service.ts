import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './../../app-settings';
import { LoginModel } from './../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  public login(loginModel: LoginModel): Observable<[boolean, string]> {
    return new Observable<[boolean, string]>((observer) => {
      let url = this.defaultAPIURLHost + "/api/login";
      let body = "email=" + loginModel.email + "&password=" + loginModel.password;

      this.httpClient.post(url, body, this.options).subscribe(
        response => {
          if (response != null) {
            let data = response;
            console.log(data);

            observer.next([true, ""]);
            observer.complete();
          } else {
            observer.next([false, "Username or password is incorrect."]);
            observer.complete();
          }
        },
        error => {
          observer.next([false, error["error"].error_description]);
          observer.complete();
        });
    });
  }
}
