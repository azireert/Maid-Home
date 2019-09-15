import { Component, OnInit } from '@angular/core';
import {MenageService} from '../../shared/services/menage.service';
import {Menage} from '../../shared/model/menage.model';

@Component({
  selector: 'app-maid-home',
  templateUrl: './maid-home.component.html',
  styleUrls: ['./maid-home.component.css']
})
export class MaidHomeComponent implements OnInit {
  menage: Menage;
  idMaid = JSON.parse(localStorage.getItem('id')).id;
  isDispo;
  constructor(private menageService: MenageService) { }

  ngOnInit() {
    this.getMenage(this.idMaid);
  }
  getMenage(id) {
    this.menageService.getMenage(id).subscribe(data => {
      this.menage = data;
      if (this.menage.estDispo === 1) {
        this.isDispo = true;
      } else {
        this.isDispo = false;
      }
    });
  }
  updateDispo() {
    const menage = this.menage;
    menage[0].estDispo = 1;
    this.menageService.updateDispo(menage[0]).subscribe(
        next => {
          console.log(next);
          this.isDispo = true;
        }, error => {
          console.log(error);
        }
    );
  }
  updateIndispo() {
    const menage = this.menage;
    menage[0].estDispo = 0;
    this.menageService.updateDispo(menage[0]).subscribe(
        next => {
          console.log(next);
          this.isDispo = false;
        }, error => {
          console.log(error);
        }
    );
  }





}
