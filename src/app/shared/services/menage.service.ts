import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menage} from '../model/menage.model';
import {Visite} from '../model/visite.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenageService {
  private dataURL = environment.baseUrl + 'menage';

  constructor(private http: HttpClient) { }

  getAllMenage(region): Observable<Menage[]> {
    return this.http.get<Menage[]>(this.dataURL + '/' + region);
  }

  getMenage(id): Observable<Menage> {
    return this.http.get<Menage>(this.dataURL + '/connect/' + id);
  }
  getMenageUtilisateur(id): Observable<Menage[]> { // retourne toutes les femmes concernées par un utilisateur
    return this.http.get<Menage[]>(this.dataURL + '/utilisateur/' + id);
  }

  updateNote(menage: Menage): Observable<any> {
    return this.http.put<Menage>(this.dataURL + '/note' , menage);
  }

  updateDispo(menage: Menage): Observable<any> {
    return this.http.put<Menage>(this.dataURL + '/dispo' , menage);
  }

  postMenage(menage: Menage): Observable<any> {
    return this.http.post<Menage>(this.dataURL , menage);
  }
}
