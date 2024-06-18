import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
nombre?: string;
constructor(private _servicioFamiliar: ServicioFamiliarService){}


  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
}
preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo()); 
}

/** 
  //Variable vacia
mensajeRecibido: string = '';
//Metodo
recibirMensaje($event: string){
  this.mensajeRecibido = $event;
}

//Contador  
valorContador: number = 0;
/**Este ejemplo sirve para ver los @input 
mensajePadre= 'Ojala la Selección llegue al proximo mundial';
incrementar(){
  this.valorContador++; //aumenta +1 al valor contador
}
decrementar(){
  this.valorContador--; //disminuye -1 al valor contador}*/
}



