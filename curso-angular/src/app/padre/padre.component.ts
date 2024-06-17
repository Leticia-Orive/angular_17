import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
valorContador: number = 0;

incrementar(){
  this.valorContador++; //aumenta +1 al valor contador
}
decrementar(){
  this.valorContador--; //disminuye -1 al valor contador
}
}
