import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isMaid = JSON.parse(localStorage.getItem('isMaid')).isMaid;
        if (isMaid === false) {
            // Si pas d'utilisateur connecté : redirection vers la page de login
            this.router.navigate(['/auth']);
        } else {
            return true;
        }
    }
}
