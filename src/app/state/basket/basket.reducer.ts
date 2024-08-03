import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { addToBasket, removeFromBasket, clearBasket } from './basket.actions';

export const initialState: Product[] = [];

const _basketReducer = createReducer(
  initialState,
  on(addToBasket, (state, { product }) => {
    return [...state, product];
  }),
  on(removeFromBasket, (state, { productId }) => {
    return state.filter(product => product.id !== productId);
  }),
  on(clearBasket, state => {
    return [];
  })
);

export function basketReducer(state, action) {
  return _basketReducer(state, action);
}
