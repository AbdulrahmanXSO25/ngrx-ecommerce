import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketItem } from '../../models/basket-item.model';
import { removeFromBasket, clearBasket, updateQuantity } from '../../state/basket/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<BasketItem[]>;

  constructor(private store: Store<{ basket: BasketItem[] }>) {
    this.basket$ = store.select('basket');
  }

  ngOnInit(): void {}

  removeFromBasket(productId: number) {
    this.store.dispatch(removeFromBasket({ productId }));
  }

  clearBasket() {
    this.store.dispatch(clearBasket());
  }

  updateQuantity(productId: number, quantity: number) {
    this.store.dispatch(updateQuantity({ productId, quantity }));
  }
}
