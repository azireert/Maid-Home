import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../model/auth.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataURL = environment.baseUrl + 'auth';

  constructor(private http: HttpClient) { }

  postAuth(auth: Auth): Observable<any> {
    return this.http.post<any>(this.dataURL , auth);
  }
}
