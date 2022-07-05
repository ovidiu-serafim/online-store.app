import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Product } from "../../shared/models/product";
import * as CartSelectors from '../../redux/cart/cart.selectors';
import * as CartActions from '../../redux/cart/cart.actions';
import {CartState} from "../../redux/cart/cart.reducer";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products!: Product[];
  isActiveOrderNote: boolean = false;

  constructor(private store: Store<CartState>) {}

  ngOnInit(): void {
    this.store.select(CartSelectors.getCartProducts).subscribe( cartState => this.products = cartState.products);
  }

  removeProduct(product: Product) {
    this.store.dispatch(CartActions.removeProduct({ product }));
  }

  getTotal(): number {
    return this.products.map(product => product.price)
      .reduce((totalPrice, price) => totalPrice + price, 0);
  }

  getProductPrice(product: Product): number {
    let productQuantity = product.quantity;
    if(productQuantity < 1){
      productQuantity = 1;
    }

    return product.price * productQuantity;
  }

  setOrderNote(): void {
    this.isActiveOrderNote = !this.isActiveOrderNote;
  }

  onIncrement(productId: string): void {
    this.store.dispatch(CartActions.incrementProductQuantity({ productId }));
  }

  onDecrement(productId: string): void {
    this.store.dispatch(CartActions.decrementProductQuantity({ productId }));
  }
}
