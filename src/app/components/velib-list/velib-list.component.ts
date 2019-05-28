import { Component, OnInit } from '@angular/core';
import { VelibService } from 'src/app/services/velib.service';
import { Velib } from '../../interface/velib'

@Component({
  selector: 'app-velib-list',
  templateUrl: './velib-list.component.html',
  styleUrls: ['./velib-list.component.css'],
  providers: [VelibService]
})
export class VelibListComponent implements OnInit {

  velib: Velib[];

  constructor(private velibService: VelibService) { }

  ngOnInit() {
    this.velibService.getVelib().subscribe((res: Velib[]) => {
      this.velib = res;
    })
  }

}
