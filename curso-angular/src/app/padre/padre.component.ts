import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  //Variable vacia
mensajeRecibido: string = '';
//Metodo
recibirMensaje($event: string){
  this.mensajeRecibido = $event;
}

//Contador  
valorContador: number = 0;
/**Este ejemplo sirve para ver los @input 
mensajePadre= 'Ojala la Selección llegue al proximo mundial';*/
incrementar(){
  this.valorContador++; //aumenta +1 al valor contador
}
decrementar(){
  this.valorContador--; //disminuye -1 al valor contador
}


}
