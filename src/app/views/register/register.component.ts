import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../../shared/services/utilisateur.service';
import {MenageService} from '../../shared/services/menage.service';
import {Menage} from '../../shared/model/menage.model';
import {Utilisateur} from '../../shared/model/utilisateur.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isShow = false;
  sexe = [
    {value: 'Homme', viewValue: 'Homme'},
    {value: 'Femme', viewValue: 'Femme'},
    {value: 'autre', viewValue: 'Autre chose'}
  ];
  data = [
    { region: 'Nord' }, // Nord
    { region: 'Picardie' }, // Picardie
    { region: 'Rhones-Alpes' }, // Rhones-Alpes
    { region: 'Provence' }, // Provence
    { region: 'Corse' }, // Corse
    { region: 'Ile-de-France' },  // Ile-de-France
    { region: 'Midi-Pyrenees' },  // Midi-Pyrénées
    { region: 'Haute-Normandie' },  // Haute-Normandie
    { region: 'Basse-Normandie' },  // Basse-Normandie
    { region: 'Bretagne' },  // Bretagne
    { region: 'Champagne-Ardenne' },  // Champagne-Ardenne
    { region: 'Lorraine' },  // Lorraine
    { region: 'Alsace' },  // Alsace
    { region: 'Pays-de-la-Loire' },  // Pays-de-la-Loire
    { region: 'Centre' },  // Centre
    { region: 'Bourgogne' },  // Bourgogne
    { region: 'Franche-conté' },  // Franche-conte
    { region: 'Poitou-Charrentes' },  // Poitou-Charrentes
    { region: 'Limousin' },  // Limousin
    { region: 'Auvergne' },  // Auvergne
    { region: 'Aquitaine' },  // Aquitaine
  ]
  constructor(private _formBuilder: FormBuilder, private utilisateurService: UtilisateurService, private menageService: MenageService, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      isMaid: ['', Validators.required]
    });
    if (this.isShow === false) {
      this.secondFormGroup = this._formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        tel: ['', Validators.required],
        mail: ['', Validators.required],
        description: [''],
        mdp: ['', Validators.required],
        confirmMdp: ['', Validators.required],
        sexe: ['', Validators.required],
      });
    } else {
      this.secondFormGroup = this._formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        tel: ['', Validators.required],
        mail: ['', Validators.required],
        description: ['', Validators.required],
        mdp: ['', Validators.required],
        confirmMdp: ['', Validators.required],
        sexe: ['', Validators.required],
      });
    }
    this.thirdFormGroup = this._formBuilder.group({
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      cp: ['', Validators.required],
      region: ['', Validators.required],
    });
  }


  sendUser(f) {
    const formValue1 = this.firstFormGroup.value;
    const formValue2 = this.secondFormGroup.value;
    const formValue3 = this.thirdFormGroup.value;
    const isMaid = formValue1.isMaid;
    console.log(isMaid);

    if (isMaid === '1') {
      const menage = new Menage(
          formValue2.nom,
          formValue2.prenom,
          formValue2.tel,
          formValue2.mail,
          formValue2.description,
          formValue2.sexe,
          formValue3.ville,
          formValue3.adresse,
          formValue3.cp,
          formValue3.region,
          formValue2.confirmMdp
      );

      this.menageService.postMenage(menage).subscribe(
          next => {
            console.log(next);
          }, error => {
            console.log(error);
          }
      );
    } else {
      const utilisateur = new Utilisateur(
          formValue2.nom,
          formValue2.prenom,
          formValue2.tel,
          formValue2.mail,
          formValue2.sexe,
          formValue3.ville,
          formValue3.adresse,
          formValue3.cp,
          formValue3.region,
          formValue2.confirmMdp
      );

      this.utilisateurService.postUtilisateur(utilisateur).subscribe(
          next => {
            console.log(next);
            this.router.navigate(['/auth']);
          }, error => {
            console.log(error);
          }
      );
    }

  }

  hideTextArea() {
    this.isShow = false;
  }

  showTextArea() {
    this.isShow = true;
  }
}
