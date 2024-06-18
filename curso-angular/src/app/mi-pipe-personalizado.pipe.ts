import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor: string | undefined ): string {
    //Si valor existe lo devuelve en mayusculas y sino lo devuelve vacio
    return valor?.toUpperCase() || '';
    /*Si valor existe lo devuelve en minisculas y sino lo devuelve vacio
    return valor?.toLowerCase() || '';
    */
    
  }

}
