import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
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
 /**Se puede poner asi:
  * usuarioActivo: string = 'Pedro'
  * Pero tambien asi:
  */
 usuarioActivo: any = {
  nombre: 'Pedro',
  apellido: 'Perez',
  dni: '12345678'
 }
 constructor(private form: FormBuilder){
  this.formularioContacto = this.form.group({
    /**Aqui añadimos los control */
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(3)]],
    /**Para poner dos validaciones tienen que ir las dos metidas en un [] o para entenderlo mejor doble corchete [[]] */
    email: ['', [Validators.required, Validators.email]],
  });
 }
  ngOnInit(): void {
    //Esto sirve para que el usuario se quede fijo
    /**Esto es un forma cuando solo queremos uno
     * this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
     * this.formularioContacto.get('nombre')?.disable();
     */
    /**Esto es otra forma para coger varios y hacer un parcheo */
    this.formularioContacto.patchValue({
      /**Aqui paso lo que quiero setear definitivamente */
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    });
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();
  }
 enviar(){
  console.log(this.formularioContacto)

 }
 hasErrors(controlName: string, errorType: string ){
  return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
 }
}
