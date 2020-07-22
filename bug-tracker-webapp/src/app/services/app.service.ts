import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {finalize} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated: boolean;
  employee: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  authenticate(credentials?: { username: string, password: string }, callback?) {
    // const headers = new HttpHeaders(credentials ? {
    //   authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    // } : {});

    //TODO: replace request with profile for user
    this.http.get(environment.API_BASE_URL + '/employees/1')
      .subscribe(response => {
        // if response successful, set authenticate to true and execute callback()
        this.employee = response;
        this.authenticated = !!response['firstName'];
        return callback && callback();
      });
  }

  logout() {
    this.http.post(environment.API_BASE_URL + '/logout', {})
      .pipe(
        finalize(() => {
          this.authenticated = false;
          this.router.navigate(['/login']);
        })
      ).subscribe();
  }
}
