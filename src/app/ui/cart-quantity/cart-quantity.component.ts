import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartState} from "../../redux/cart/cart.reducer";
import {Store} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import * as CartSelectors from '../../redux/cart/cart.selectors';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})
export class CartQuantityComponent implements OnInit {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() didIncrement = new EventEmitter();
  @Output() didDecrement = new EventEmitter();
  products!: Product[];

  constructor(private store: Store<CartState>) {
  }

  ngOnInit() {
    this.store.select(CartSelectors.getCartProducts).subscribe(cartState => this.products = cartState.products);
  }

  incrementQuantity(): void {
    this.didIncrement.emit();
  }

  decrementQuantity(): void {
    if(this.quantity > 0){
      this.didDecrement.emit();
    }
  }
}
