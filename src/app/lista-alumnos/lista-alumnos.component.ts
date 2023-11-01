import { Component, OnInit, SimpleChanges } from '@angular/core';
import { alumno } from './alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }


  alumno: alumno = {
    nombre: '',
   presente: false 
  }

  ngOnInit() {}
  
  agregarAlumno(): void {
    this.alumnos.push(this.alumno);
    this.alumno = {
      nombre : '',
      presente: false
    }
    
  }

  alumnos : any = [];
 
  verdadero : boolean = true;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
}
