import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductState} from "../../redux/product/product.reducer";
import { Product } from "../../shared/models/product";
import * as CartSelectors from '../../redux/cart/cart.selectors';
import * as CartActions from '../../redux/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products!: Product[];
  isActiveOrderNote: boolean = false;

  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
    this.store.select(CartSelectors.getCartProducts).subscribe( products => this.products = products);
  }

  removeProduct(product: Product) {
    this.store.dispatch(CartActions.removeProduct({ product }));
  }

  getTotal(): number {
    return this.products.map(product => product.price)
      .reduce((totalPrice, price) => totalPrice + price, 0);
  }

  setOrderNote(): void {
    this.isActiveOrderNote = !this.isActiveOrderNote;
  }
}
