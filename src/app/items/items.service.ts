import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { ItemsParams } from '../models/itemsParams';
import { IProduct } from '../models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseUrl = 'https://localhost:5001/api/';
  products: IProduct[] = [];
  itemsParams = new ItemsParams();

  constructor(private http: HttpClient) { }

  getProducts(useCache: boolean) {
    if (useCache === false) {
      this.products = [];
    }

    let params = new HttpParams();

    if (this.itemsParams.brandId !== 0) {
      params = params.append('brandId', this.itemsParams.brandId.toString());
    }

    if (this.itemsParams.typeId !== 0) {
      params = params.append('typeId', this.itemsParams.typeId.toString());
    }

    if (this.itemsParams.search) {
      params = params.append('search', this.itemsParams.search);
    }

    params = params.append('sort', this.itemsParams.sort);
    params = params.append('pageIndex', this.itemsParams.pageNumber.toString());
    params = params.append('pageSize', this.itemsParams.pageSize.toString());

  }

  getProduct(id: number) {
    const product = this.products.find(p => p.id === id);

    if (product) {
      return of(product);
    }

    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

}
