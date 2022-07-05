import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/models/product";
import * as ProductActions from "../../redux/product/product.actions";
import * as ProductSelectors from "../../redux/product/product.selectors";
import {Store} from "@ngrx/store";
import {CartState} from "../../redux/cart/cart.reducer";

@Component({
  selector: 'app-quick-cart',
  templateUrl: './quick-cart.component.html',
  styleUrls: ['./quick-cart.component.scss']
})
export class QuickCartComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<CartState>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.requestList());
    this.store.select(ProductSelectors.getProducts).subscribe( products => this.products = products);
  }

  getTotal(): number {
    return this.products.map(product => product.price)
      .reduce((totalPrice, price) => totalPrice + price, 0);
  }
}
