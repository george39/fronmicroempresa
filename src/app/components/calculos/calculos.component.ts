import { Component, OnInit } from '@angular/core';
import { Egresos } from 'src/app/models/egresos';
import { EgresosService } from '../../services/egresos.service';
import { IngresosService } from '../../services/ingresos.service';
import { Ingresos } from '../../models/ingresos';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styles: [
  ]
})
export class CalculosComponent implements OnInit {
  public egreso: Egresos;
  public egreso2: any[];
  public ingresos: Ingresos;
  public ingresos2: any[];
  public totalEgresos: number;
  public totalIngresos: number;

  constructor(
    private egresosService: EgresosService,
    private ingresosService: IngresosService,

  ) {
    this.egreso2 = new Array();
    this.ingresos2 = new Array();
    this.totalEgresos = 0;
    this.totalIngresos = 0;
   }

  ngOnInit(): void {
    this.getEgresos();
    this.getIngresos();
    
  }


  getEgresos() {
    this.egresosService.getEgreso().subscribe(
      response => {
        // this.egreso = response.egreso;
        // console.log('egresos', this.egreso);
        response.egreso.forEach((egreso) => {
          egreso.registros.forEach((registro) => {
            
            this.egreso2.push(registro.valor);
            console.log('egresos', registro.valor);
            
          });
        });
        this.totalEgreso();
      },
      error => {
        console.log(error as any);
      }
      );
  }


  getIngresos() {
    this.ingresosService.getIngreso().subscribe(
      response => {
        // this.ingresos = response.ingresos;
        // console.log('ingresos', this.ingresos);
        response.ingresos.forEach((ingreso) => {
          ingreso.registros.forEach((registro) => {
            this.ingresos2.push(registro.valor);
            console.log('ingresos', registro.valor);

          });
        });
        this.totalIngreso();
      },
      error => {
        console.log(error as any);
      }
    );
  }


  /***********************************************
   FUNCION PARA SUMAR EL TOTAL DE LA DE LOS EGGRESOS
  /***********************************************/
  totalEgreso() {
    let sumar = 0;
    for (let i of this.egreso2) {
      sumar += i;
      this.totalEgresos = sumar;
      console.log('sumar', this.totalEgresos);
    }
  }



  /***********************************************
   FUNCION PARA SUMAR EL TOTAL DE LA DE LOS INGRESOS
  /***********************************************/
  totalIngreso() {
    let sumar = 0;
    for (let i of this.ingresos2) {
      sumar += i;
      this.totalIngresos = sumar;
      console.log('sumar', this.totalIngresos);
    }
  }

}
