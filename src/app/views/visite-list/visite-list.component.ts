import { Component, OnInit } from '@angular/core';
import {VisiteService} from '../../shared/services/visite.service';
import {Visite} from '../../shared/model/visite.model';
import {MenageService} from '../../shared/services/menage.service';
import {Menage} from '../../shared/model/menage.model';
import {MatDialog} from '@angular/material';
import {DialogMenageComponent} from './dialog-menage/dialog-menage.component';

@Component({
  selector: 'app-visite-list',
  templateUrl: './visite-list.component.html',
  styleUrls: ['./visite-list.component.css']
})
export class VisiteListComponent implements OnInit {
  tabVisite: Visite[];
  tabMenage: Menage[];
  isDataAvailable = false;
  constructor(private visiteService: VisiteService, private menageService: MenageService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUtilisateurVisite(1);
    this.getMenageUtilisateur(1);
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
  getMenageUtilisateur(idUtilisateur) {
    this.menageService.getMenageUtilisateur(idUtilisateur).subscribe(data => {
      this.tabMenage = data;
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

}
