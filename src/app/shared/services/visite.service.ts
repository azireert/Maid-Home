import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visite} from '../model/visite.model';
import {Menage} from '../model/menage.model';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  private dataURL = 'http://localhost:3000/visite';

  constructor(private http: HttpClient) { }

  postVisite(visite: Visite): Observable<any> {
    return this.http.post<Visite>(this.dataURL , visite);
  }

  getUtilisateurVisite(id): Observable<Visite[]> { // retourne toutes les visites d1 utilsateur
    return this.http.get<Visite[]>(this.dataURL + '/utilisateur/' + id);
  }
}
