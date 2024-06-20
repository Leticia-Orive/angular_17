import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
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
  formularioContacto: FormGroup;
  /**Creamos una variable */
  tipoDni: string = 'DNI';
  /**Se puede poner asi:
   * usuarioActivo: string = 'Pedro'
   * Pero tambien asi:
   */
  /**Para las validators fijas y disabled 
 usuarioActivo: any = {
  nombre: 'Pedro',
  apellido: 'Perez',
  dni: '12345678'
 }*/
  mostrarDni: boolean = false
  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      /**Aqui añadimos los control */
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      /*Ahora apellidos y dni sin validaciones
    apellido: [''],*/
      tipoDni: [''],
     
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      /**Con validaciones 
   
    dni: ['', [Validators.required, Validators.minLength(3)]],*/
      /**Para poner dos validaciones tienen que ir las dos metidas en un [] o para entenderlo mejor doble corchete [[]] */
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('juan');
    this.formularioContacto.get('nombre')?.disable();
    /**Subcripciones 
     * Subcribirnos al formulario entero
    
    this.formularioContacto.valueChanges.subscribe(valor => {
      console.log(valor)
    })*/
    /**Ahora nos vamos a subcribir solo al tipo dni */
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((value) => {
      this.mostrarDni = value != ''
      this.tipoDni = value;
    });

    /**Ejemplos para las validators 
    /**Si le queremos sacar el validators se pone: 
    this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity()*/

    /**Apellido y dni sin validaciones otra forma de hacerlo, con esta forma puedo setear los validators fuera del constructor 
    this.formularioContacto
      .get('apellido')
      ?.setValidators([Validators.required, Validators.minLength(3)]);*/

    /**Si el seteo viene vacio lo puedes hacer de esta manera
       * if(this.usuarioActivo.apellido === '') this.formularioContacto
        .get('apellido')
        ?.setValidators([Validators.required, Validators.minLength(3)]);
       */

    //Esto sirve para que el usuario se quede fijo
    /**Esto es un forma cuando solo queremos uno
     * this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
     * this.formularioContacto.get('nombre')?.disable();
     */
    /**Esto es otra forma para coger varios y hacer un parcheo 
    this.formularioContacto.patchValue({*/
    /**Aqui paso lo que quiero setear definitivamente 
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    });
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();*/
  }
  ngOnDestroy(): void {
    console.log('se destruye el componente');
  }

  enviar() {
    console.log(this.formularioContacto);
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }
}
