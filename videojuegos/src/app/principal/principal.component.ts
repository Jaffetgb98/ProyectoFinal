import { Component, OnInit } from '@angular/core';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  informacionRecibida:any=""
  constructor(private servicio:ServicioJuegosService) {
    servicio.getObtenerImagenes().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
