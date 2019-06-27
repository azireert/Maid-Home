import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menage} from '../model/menage.model';
import {Visite} from '../model/visite.model';

@Injectable({
  providedIn: 'root'
})
export class MenageService {
  private dataURL = 'http://localhost:3000/menage';

  constructor(private http: HttpClient) { }

  getAllMenage(region): Observable<Menage[]> {
    return this.http.get<Menage[]>(this.dataURL + '/' + region);
  }

  getMenageVisite(id): Observable<Menage> { // retourne 1 femme concerné par une visite
    return this.http.get<Menage>(this.dataURL + '/visite/' + id);
  }
  getMenageUtilisateur(id): Observable<Menage[]> { // retourne toutes les femmes concernées par un utilisateur
    return this.http.get<Menage[]>(this.dataURL + '/utilisateur/' + id);
  }

  postMenage(menage: Menage): Observable<any> {
    return this.http.post<Menage>(this.dataURL , menage);
  }
}
