// basket.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addToBasket, removeFromBasket, clearBasket, updateQuantity } from './basket.actions';
import { BasketItem } from '../../models/basket-item.model';

export const initialState: BasketItem[] = [];

const _basketReducer = createReducer(
  initialState,
  on(addToBasket, (state, { product }) => {
    const existingItem = state.find(item => item.product.id === product.id);
    if (existingItem) {
      return state.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      return [...state, { product, quantity: 1 }];
    }
  }),
  on(removeFromBasket, (state, { productId }) => {
    return state.filter(item => item.product.id !== productId);
  }),
  on(clearBasket, state => {
    return [];
  }),
  on(updateQuantity, (state, { productId, quantity }) => {
    return state.map(item => item.product.id === productId ? { ...item, quantity } : item);
  })
);

export function basketReducer(state, action) {
  return _basketReducer(state, action);
}
