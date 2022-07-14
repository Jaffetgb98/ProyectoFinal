import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() imagenJuego:string=''
  @Input() nombreJuego:string=''
  constructor() {}

  
  
  


  ngOnInit(): void {
  }
}
