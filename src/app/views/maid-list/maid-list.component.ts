import {Component, OnInit, ViewChild} from '@angular/core';
import {MenageService} from '../../shared/services/menage.service';
import {Menage} from '../../shared/model/menage.model';
import {ActivatedRoute} from '@angular/router';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-maid-list',
  templateUrl: './maid-list.component.html',
  styleUrls: ['./maid-list.component.css']
})
export class MaidListComponent implements OnInit {
  tabMenage: Menage[];
  region: any;
  isDataAvailable = false;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  };


  constructor(private route: ActivatedRoute, private menageService: MenageService) { }

  ngOnInit() {
    const region = this.route.snapshot.paramMap.get('region');
    this.getAllMenage(region);
  }

  getAllMenage(region) {
    this.menageService.getAllMenage(region).subscribe(data => {
      this.tabMenage = data;
      this.isDataAvailable = true;
    });
  }

}
