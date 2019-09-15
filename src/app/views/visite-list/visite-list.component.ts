import { Component, OnInit } from '@angular/core';
import {VisiteService} from '../../shared/services/visite.service';
import {Visite} from '../../shared/model/visite.model';
import {MenageService} from '../../shared/services/menage.service';
import {Menage} from '../../shared/model/menage.model';
import {MatDialog} from '@angular/material';
import {DialogMenageComponent} from './dialog-menage/dialog-menage.component';
import {Utilisateur} from '../../shared/model/utilisateur.model';
import {UtilisateurService} from '../../shared/services/utilisateur.service';

@Component({
  selector: 'app-visite-list',
  templateUrl: './visite-list.component.html',
  styleUrls: ['./visite-list.component.css']
})
export class VisiteListComponent implements OnInit {
  tabVisite: Visite[];
  tabMenage: Menage[];
  tabUtilisateur: Utilisateur[];
  isDataAvailable = false;
  isMaid = JSON.parse(localStorage.getItem('isMaid')).isMaid;
  id = JSON.parse(localStorage.getItem('id')).id;
  constructor(private visiteService: VisiteService, private menageService: MenageService, private utilisateurService: UtilisateurService, public dialog: MatDialog) { }
  ngOnInit() {
    if (this.isMaid) {
      this.getMenageVisite(this.id);
      this.getUtilisateurMenage(this.id);
    } else {
      this.getUtilisateurVisite(this.id);
      this.getMenageUtilisateur(this.id);
    }
  }

  openDialog(maid) {
    this.dialog.open(DialogMenageComponent, {
      data:  maid,
    });
  }

  getUtilisateurVisite(id) {
    this.visiteService.getUtilisateurVisite(id).subscribe(data => {
      this.tabVisite = data;
    });
  }

  getMenageVisite(id) {
    this.visiteService.getMenageVisite(id).subscribe(data => {
      this.tabVisite = data;
    });
  }
  getMenageUtilisateur(idUtilisateur) {
    this.menageService.getMenageUtilisateur(idUtilisateur).subscribe(data => {
      this.tabMenage = data;
      this.isDataAvailable = true;
    });
  }

  getUtilisateurMenage(idMenage) {
    this.utilisateurService.getUtilisateurMenage(idMenage).subscribe(data => {
      this.tabUtilisateur = data;
      this.isDataAvailable = true;
    });
  }

  getMenagebyIdVisite(idVisite) {
    for (let i = 0 ; i < this.tabMenage.length; i++) {
      if (this.tabMenage[i].idVisite === idVisite) {
        return this.tabMenage[i];
      }
    }
  }

  getUtilisateurbyIdVisite(idVisite) {
    for (let i = 0 ; i < this.tabUtilisateur.length; i++) {
      if (this.tabUtilisateur[i].idVisite === idVisite) {
        return this.tabUtilisateur[i];
      }
    }
  }
  confirmVisite(visite: Visite) {
    this.visiteService.confirmVisite(visite).subscribe(
        next => {
          console.log(next);
          this.ngOnInit();
        }, error => {
          console.log(error);
        }
    );
  }

  cancelVisite(visite: Visite) {
    this.visiteService.cancelVisite(visite).subscribe(
        next => {
          console.log(next);
          this.ngOnInit();
        }, error => {
          console.log(error);
        }
    );
  }

  finishVisite(visite: Visite) {
    this.visiteService.finishVisite(visite).subscribe(
        next => {
          console.log(next);
          this.ngOnInit();
        }, error => {
          console.log(error);
        }
    );
    visite.heureDepart = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    this.visiteService.updateDateDepart(visite).subscribe(
        next => {
          console.log(next);
          this.ngOnInit();
        }, error => {
          console.log(error);
        }
    );
  }

}
