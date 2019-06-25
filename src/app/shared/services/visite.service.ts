import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visite} from '../model/visite.model';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  private dataURL = 'http://localhost:3000/visite';

  constructor(private http: HttpClient) { }

  postVisite(visite: Visite): Observable<any> {
    return this.http.post<Visite>(this.dataURL , visite);
  }
}
