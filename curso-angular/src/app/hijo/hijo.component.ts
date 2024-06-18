import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  //Este es el mensaje que recibe desde el padre, le pongo el signo ? para que no me de error y me diga que esta vacio
  //@Input() recibeHijo?: string;

  //Esto es para los @Output
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();//Vamos a imitir un evento vacio
  @Output() decrementarDesdeHijo = new EventEmitter<void>();
  mensaje: string = '';
  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
  incrementar() {
    this.incrementarDesdeHijo.emit();
  }
  decrementar() {
    this.decrementarDesdeHijo.emit();
  }
}
