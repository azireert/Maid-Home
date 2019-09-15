import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commentaire} from '../model/commentaire.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private dataURL = environment.baseUrl + 'commentaire';

  constructor(private http: HttpClient) { }
  postCommentaire(commentaire: Commentaire): Observable<any> {
    return this.http.post<Commentaire>(this.dataURL , commentaire);
  }

  getAllCommentaire(id): Observable<Commentaire[]> { // retourne toutes les femmes concernées par un utilisateur
    return this.http.get<Commentaire[]>(this.dataURL + '/' + id);
  }
}
