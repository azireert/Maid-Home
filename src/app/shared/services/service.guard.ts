import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = !isNull(localStorage.getItem('user'));
        const isMaid = JSON.parse(localStorage.getItem('isMaid')).isMaid;
        if (!isLoggedIn) {
            // Si pas d'utilisateur connecté : redirection vers la page de login
            this.router.navigate(['/auth']);
        }
        return isLoggedIn;
    }
}
