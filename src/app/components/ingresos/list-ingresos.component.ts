import { Component, OnInit } from '@angular/core';
import { Ingresos } from '../../models/ingresos';
import { ActivatedRoute, Router } from '@angular/router';
import { IngresosService } from '../../services/ingresos.service';

@Component({
  selector: 'app-list-ingresos',
  templateUrl: './list-ingresos.component.html',
  styles: [
  ]
})
export class ListIngresosComponent implements OnInit {

  public ingresos: Ingresos;
  public buscar;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ingresoService: IngresosService
  ) { }

  ngOnInit(): void {
    this.getIngresos();
  }

  getIngresos() {
    this.ingresoService.getIngreso().subscribe(
      response => {
        this.ingresos = response.ingresos;
        console.log('egresos', this.ingresos);
      }
    );
  }

}
