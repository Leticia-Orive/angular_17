import { Component, OnInit } from '@angular/core';
import { productsList } from './product.mock';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /**Esto es con la forma mock pero ahora lo vamos hacer de otra forma
   * productsList = productsList;
   */
  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      
      this.productsList = data;
    })
  }
}
