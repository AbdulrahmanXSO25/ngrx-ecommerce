import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { removeFromBasket, clearBasket } from '../../state/basket/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<Product[]>;

  constructor(private store: Store<{ basket: Product[] }>) {
    this.basket$ = store.select('basket');
  }

  ngOnInit(): void {}

  removeFromBasket(productId: number) {
    this.store.dispatch(removeFromBasket({ productId }));
  }

  clearBasket() {
    this.store.dispatch(clearBasket());
  }
}
