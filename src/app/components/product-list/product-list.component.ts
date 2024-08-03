import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { loadProductsSuccess } from '../../state/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<{ products: Product[] }>, private productService: ProductService) {
    this.products$ = store.select('products');
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.store.dispatch(loadProductsSuccess({ products }));
    });
  }
}
