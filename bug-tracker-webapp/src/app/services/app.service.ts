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

  constructor(private http: HttpClient,
              private router: Router) {
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
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
