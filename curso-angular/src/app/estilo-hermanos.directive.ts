import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';

    //Directiva capitalizada que nos pone la primera letra en mayuscula
    this.element.nativeElement.style.textTransform = 'capitalize';
   }

}
