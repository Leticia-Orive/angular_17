import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';
  constructor(private _httpClient: HttpClient) {}
  //Para traer todos los productos añadimos sort para ponerlo ascendente o descendente
  /*public getProducts(sort?: string): Observable<IProduct[]> {
    //Si no viniese le pondria asi:
    const params = sort ? `?sorts=${sort}`: '';
    return this._httpClient.get<IProduct[]>(`${this.baseURL}${params}`);
  }*/
  //Para todos los productos se puede llamar getProducts o :
  public getAllProducts(): Observable<IProduct[]> {
    //devuelve un observable de Productos
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }
  //Para traer solo un producto por id
  public getProduct(id: number): Observable<IProduct> {
    //devuelve un observable de un Productos
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }
  //Para tener todas las categorias se pone asi getCategories o:
  public getAllCategories(): Observable<Category[]> {
    //devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  //Agregar un nuevo producto se pone asi postProduct o:
  public newProduct(product: IProduct): Observable<IProduct> {
    // devuelve un observable de un producto
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }
  //Editar o actualizar un producto por el id se puede poner asi putProduct o :
  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    // devuelve un observable de un producto
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }
  //Borrar producto
  public deleteProduct(id: number): Observable<IProduct> {
    // devuelve un observable de un producto
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
