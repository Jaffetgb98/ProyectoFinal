import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() imagenJuego:string=""
  @Input() nombreJuego:string=""
  @Input() idJuego:string=""

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  irDetalles(){
    this.router.navigate(["info",this.idJuego])
  }


}
