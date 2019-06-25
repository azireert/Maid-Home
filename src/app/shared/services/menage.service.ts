import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menage} from '../model/menage.model';

@Injectable({
  providedIn: 'root'
})
export class MenageService {
  private dataURL = 'http://localhost:3000/menage';

  constructor(private http: HttpClient) { }

  getAllMenage(region): Observable<Menage[]> {
    return this.http.get<Menage[]>(this.dataURL + '/' + region);
  }
}
