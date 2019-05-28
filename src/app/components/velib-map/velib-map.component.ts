import { Component, OnInit } from '@angular/core';
import { VelibService } from 'src/app/services/velib.service';
import { Velib } from '../../interface/velib'

@Component({
  selector: 'app-velib-map',
  templateUrl: './velib-map.component.html',
  styleUrls: ['./velib-map.component.css'],
  providers: [VelibService]
})
export class VelibMapComponent implements OnInit {

  latitude = 48.0833;
  longitude = -1.6833;

  velib: Velib[];

  constructor(private velibService: VelibService) { }

  ngOnInit() {
    this.velibService.getVelib().subscribe((res: Velib[]) => {
      this.velib = res;
    })
  }

}
