import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})
export class CartQuantityComponent {
  @Input() quantity!: number;

  constructor() { }

  incrementQuantity(): void {
    this.quantity += 1;
  }

  decrementQuantity(): void {
    this.quantity -= 1;
  }
}
