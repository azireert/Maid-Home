import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private dataURL = 'http://localhost:3000/utilisateur';

  constructor(private http: HttpClient) { }

  postUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post<Utilisateur>(this.dataURL , utilisateur);
  }
}
