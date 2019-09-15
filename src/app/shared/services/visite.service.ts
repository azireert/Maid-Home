import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visite} from '../model/visite.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  private dataURL = environment.baseUrl + 'visite';

  constructor(private http: HttpClient) { }

  postVisite(visite: Visite): Observable<any> {
    return this.http.post<Visite>(this.dataURL , visite);
  }

  getUtilisateurVisite(id): Observable<Visite[]> { // retourne toutes les visites d1 utilsateur
    return this.http.get<Visite[]>(this.dataURL + '/utilisateur/' + id);
  }

  getMenageVisite(id): Observable<Visite[]> { // retourne toutes les visites d1 utilsateur
    return this.http.get<Visite[]>(this.dataURL + '/menage/' + id);
  }

  confirmVisite(visite: Visite): Observable<any> { // retourne toutes les visites d1 utilsateur
    return this.http.put<Visite>(this.dataURL + '/confirm', visite);
  }

  finishVisite(visite: Visite): Observable<any> { // retourne toutes les visites d1 utilsateur
    return this.http.put<Visite>(this.dataURL + '/finish', visite);
  }

  updateDateDepart(visite: Visite): Observable<any> { // retourne toutes les visites d1 utilsateur
    return this.http.put<Visite>(this.dataURL + '/date', visite);
  }

  cancelVisite(visite: Visite): Observable<any> { // retourne toutes les visites d1 utilsateur
    return this.http.put<Visite>(this.dataURL + '/cancel', visite);
  }
}
