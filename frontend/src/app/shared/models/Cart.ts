import { CartItem } from './CartItem';

export class Cart {
  // we do this so when we use new Cart() items will be an empty array instead of undefined.
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}
