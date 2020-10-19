import { Component, OnInit } from '@angular/core';
import { Egresos } from 'src/app/models/egresos';
import { Router, ActivatedRoute } from '@angular/router';
import { EgresosService } from '../../services/egresos.service';

@Component({
  selector: 'app-list-egresos',
  templateUrl: './list-egresos.component.html',
  styles: [
  ]
})
export class ListEgresosComponent implements OnInit {

  public egreso: Egresos;
  public buscar;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private egresoService: EgresosService
  ) { }

  ngOnInit(): void {
    this.getEgresos();
  }


  getEgresos() {
    this.egresoService.getEgreso().subscribe(
      response => {
        this.egreso = response.egreso;
        console.log('egresos', this.egreso);
      }
    );
  }

}
