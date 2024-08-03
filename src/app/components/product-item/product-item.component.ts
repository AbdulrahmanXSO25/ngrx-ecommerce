import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { addToBasket } from '../../state/basket/basket.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(private store: Store) {}

  addToBasket() {
    this.store.dispatch(addToBasket({ product: this.product }));
  }
}
