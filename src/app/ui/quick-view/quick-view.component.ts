import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Product} from "../../shared/models/product";
import {Store} from "@ngrx/store";
import {CartState} from "../../redux/cart/cart.reducer";
import * as CartActions from '../../redux/cart/cart.actions';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit{
  @Inject(MAT_DIALOG_DATA) product!: Product;
  @Output() submitClicked = new EventEmitter<any>();
  quantity: number = 0;
  quickViewProduct!: Product;

  constructor(public dialogRef: MatDialogRef<QuickViewComponent>,
              private store: Store<CartState>) {}

  ngOnInit() {
    console.log(this.quantity);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onIncrement(){
      this.quantity++;
      this.quickViewProduct = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        caption: this.product.caption,
        description: this.product.description,
        size: this.product.size,
        category: this.product.category,
        quantity: this.quantity,
        img: this.product.img
      }
  }

  onDecrement(){
      this.quantity--;
      this.quickViewProduct = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        caption: this.product.caption,
        description: this.product.description,
        size: this.product.size,
        category: this.product.category,
        quantity: this.quantity,
        img: this.product.img
      }
  }

  addToCart(product: Product){
    this.store.dispatch(CartActions.addProduct({product}));
  }
}
