import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../../shared/model/auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isWrong = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      mail: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
      isMaid: ['']
    });
  }
  login(f) {
    const formValue = this.authForm.value;
    const auth = new Auth(
        formValue.mail,
        formValue.mdp,
        formValue.isMaid
    );
    console.log(auth);
    this.authService.postAuth(auth).subscribe(
        data => {
            console.log(data);
            if (data.length > 0) {
              localStorage.setItem('user', JSON.stringify({login : data[0].prenom + ' ' + data[0].nom}));
              localStorage.setItem('id', JSON.stringify({id : data[0].id}));
              if (data[0].description === undefined) {
                localStorage.setItem('isMaid', JSON.stringify({isMaid : false}));
                this.router.navigate(['/map']);
              } else {
                localStorage.setItem('isMaid', JSON.stringify({isMaid : true}));
                this.router.navigate(['/menages']);
              }
            } else {
              this.isWrong = true;
            }
        },
        error => {
          console.log(error, 'Error');
        });
  }

}
