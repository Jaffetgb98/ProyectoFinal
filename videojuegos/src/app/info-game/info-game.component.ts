import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css']
})
export class InfoGameComponent implements OnInit {
  valorDeLink:string=""
  informacionRecibida:any=""

  constructor(private ruta:ActivatedRoute,private servicio:ServicioJuegosService) { 
    this.ruta.params.subscribe((data:any)=>{
      this.valorDeLink=data.id
      this.servicio.getInfoDetalles(this.valorDeLink).subscribe((info:any)=>{
        this.informacionRecibida=info
      })
    })

  }


  ngOnInit(): void {
  }

}
