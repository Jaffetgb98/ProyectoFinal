import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  valorLink:string=""
  infoApiSearch:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioJuegosService) {
    this.route.params.subscribe((data:any)=>{
      this.valorLink=data.id
      this.servicio.getInfoBusqueda(this.valorLink).subscribe((info:any)=>{
        this.infoApiSearch=info
      })
    })

  }
  ngOnInit(): void {
  }

}
