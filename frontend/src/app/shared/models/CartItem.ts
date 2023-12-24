import { Food } from './Food';

export class CartItem {
  constructor(public food: Food) {}

  quantiy: number = 1;
  price: number = this.food.price;
}
