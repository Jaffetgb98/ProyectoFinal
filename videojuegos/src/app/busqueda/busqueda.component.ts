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
  infoApiSearch:string=""

  constructor(private route:ActivatedRoute, private servicio:ServicioJuegosService) {
    this.route.params.subscribe((date:any)=>{
      this.valorLink=date.id
      this.servicio.getInfoBusqueda(this.valorLink).subscribe((info:any)=>{
        this.infoApiSearch=info
      })
    })

  }


  ngOnInit(): void {
  }

}
