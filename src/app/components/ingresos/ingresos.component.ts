import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IngresosService } from '../../services/ingresos.service';
import { Ingresos } from '../../models/ingresos';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html'
})
export class IngresosComponent implements OnInit {


  public ingreso: Ingresos;
  public seleccion: string;
  public salidas: any[];
  public title: string;
  

  formData: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingresoService: IngresosService,
    private fb: FormBuilder
  ) {
    //this.egreso = new Egresos('', []);
    this.title = 'Ingresos'
    this.salidas = [
      'Maiz',
      'Otros'
    ];
    this.formData = this.fb.group({
     
      registros: this.fb.array([this.getaddress()])

    });
   }


  get addressListArray() {

    return this.formData.get('registros') as FormArray;
  }

  ngOnInit(): void {
    
  }


  getaddress() {

    return this.fb.group({
      concepto: [''],
      valor: [],
      descripcion: ['']
      
    });
  }



  addAddress() {
    this.addressListArray.push(this.getaddress());

  }

  removeAddress(index) {
    const s = this.formData.value.registros;
    s.splice(index, 1);
    const control = this.addressListArray.controls;
    control.splice(index, 1);
    
    

  }

  onSubmit(dato) {
    this.ingresoService.saveIngreso(dato).subscribe(
      response => {
        console.log('dato', dato);
        this.formData.reset();
        const control = this.addressListArray.controls;
        control.splice(dato);

      },
      error => {
        console.log (error as any);
      }
    );
  }



}
