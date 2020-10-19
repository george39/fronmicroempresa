import { Component, OnInit } from '@angular/core';
import { Egresos } from 'src/app/models/egresos';
import { Router, ActivatedRoute } from '@angular/router';
import { EgresosService } from '../../services/egresos.service';

@Component({
  selector: 'app-edit-egreso',
  templateUrl: './edit-egreso.component.html',
  styles: [
  ]
})
export class EditEgresoComponent implements OnInit {

  public title: string;
  public egreso: Egresos;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private egresoService: EgresosService
  ) { 
    this.title = 'Editar egresos';
    this.egreso = new Egresos('', []);
  }

  ngOnInit(): void {
    this.getEgresos();
  }

  getEgresos() {
    this.egresoService.getEgreso().subscribe(
      response => {
        this.egreso = response.egresos;
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
