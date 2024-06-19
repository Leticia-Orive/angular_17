import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  /**Formulario basado en plantilla
   public usuario: any ={
  nombre: '',
  email: ''
 }
 enviar(){
  console.log(this.usuario);
 }

   */
 /**Formulario Reactivos */
 /**Declaramos */
 formularioContacto: FormGroup
 constructor(private form: FormBuilder){
  this.formularioContacto = this.form.group({
    /**Aqui añadimos los control */
    nombre: ['', Validators.required],
    /**Para poner dos validaciones tienen que ir las dos metidas en un [] o para entenderlo mejor doble corchete [[]] */
    email: ['',[Validators.required, Validators.email]]
  })
 }
 enviar(){
  console.log(this.formularioContacto)

 }
}
