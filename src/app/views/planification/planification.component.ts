import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VisiteService} from '../../shared/services/visite.service';
import {Visite} from '../../shared/model/visite.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css']
})
export class PlanificationComponent implements OnInit {
  visitForm: FormGroup;
  constructor(private fb: FormBuilder, private visiteService: VisiteService, private router: Router) { }

  ngOnInit() {
    this.visitForm = this.fb.group({
      heureArrivee: ['', [Validators.required]],
      dateArrivee: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      description: ['', [Validators.required]],
      gratification: ['', [Validators.required]]
    });
  }

  sendTraining(form) {
    const formValue = this.visitForm.value ;
    const date = new Date(formValue.dateArrivee).toLocaleDateString();
    const visite = new Visite(
        date + ' ' + formValue.heureArrivee,
        '1',
        '1',
        formValue.adresse,
        formValue.cp,
        formValue.ville,
        formValue.description,
        formValue.gratification,
    );

    console.log(visite);
    this.visiteService.postVisite(visite).subscribe(
        next => {
          console.log(next);
          this.router.navigate(['/menages']);
        }, error => {
          console.log(error);
        }
    );
  }


}
