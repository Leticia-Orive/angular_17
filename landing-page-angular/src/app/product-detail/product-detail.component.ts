import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit{
  //Defino una variable 
  //Esta variable esta vacia
  producto: string = '';
  color: string ='';
  //Inyectar el active Router
  constructor(private _route: ActivatedRoute){}
  ngOnInit(): void {
   this._route.params.subscribe(params => {
    this.producto= params['productId'];
    this.color = params['category'];
   });
  }

  

}
