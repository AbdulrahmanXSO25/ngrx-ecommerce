import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { mockProducts } from '../data/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(mockProducts);
  }
}
