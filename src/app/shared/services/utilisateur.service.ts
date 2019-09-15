import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur.model';
import {Menage} from '../model/menage.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private dataURL = environment.baseUrl + 'utilisateur';

  constructor(private http: HttpClient) { }

  postUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post<Utilisateur>(this.dataURL , utilisateur);
  }

  getUtilisateurMenage(id): Observable<Utilisateur[]> { // retourne tous les utilisateurs concernées par une femme
    return this.http.get<Utilisateur[]>(this.dataURL + '/menage/' + id);
  }

  getUtilisateurMenageCommentaire(id): Observable<Utilisateur[]> { // retourne tous les utilisateurs concernées par une femme
    return this.http.get<Utilisateur[]>(this.dataURL + '/menage/commentaire/' + id);
  }
}
