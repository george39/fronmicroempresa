import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EgresosService } from '../../services/egresos.service';
import { Egresos } from '../../models/egresos';


@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {


  public egreso: Egresos;
  public seleccion: string;
  public salidas: any[];
  public title: string;
  

  formData: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private egresoService: EgresosService,
    private fb: FormBuilder
  ) {
    //this.egreso = new Egresos('', []);
    this.title = 'Egresos';
    this.salidas = [
      'Nomina',
      'Insumos'
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
    this.egresoService.saveEgreso(dato).subscribe(
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
