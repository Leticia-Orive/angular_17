import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productsList } from '../products/product.mock';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  //Defino una variable
  //Esta variable esta vacia
  /**Estas son para hacer el mock
   * product?: Product ;
   * productList: Product[] = productsList;
   */
  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';
  

  //Inyectar el active Router
  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    /**Esto es con mock
     * setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.product = this.productList.find(
          (product) => product.id == params['productId']
        );
        this.color = (this.product?.price as number) > 5 ? 'red' : '';
        this.loading = false;
      });
    }, 1500);
  }

     */

    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct)=> {
            this.product = data;
          this.color = (this.product?.price as number) > 5 ? 'red' : '';
          this.loading = false;
        },  
          error: (error : any) =>{
            console.log(error);
            this.loading = false;
          }
        })
      },
      error: (error: any) => {
        console.log(error)
      }
      
    });
  }
}
