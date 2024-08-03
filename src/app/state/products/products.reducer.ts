import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { loadProducts, loadProductsSuccess } from './products.actions';
import { mockProducts } from '../../data/mock-products';

export const initialState: Product[] = [];

const _productsReducer = createReducer(
  initialState,
  on(loadProducts, state => state),
  on(loadProductsSuccess, (state, { products }) => [...products])
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
