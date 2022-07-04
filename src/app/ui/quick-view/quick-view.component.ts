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
export class QuickViewComponent {
  @Inject(MAT_DIALOG_DATA) product!: Product;

  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<QuickViewComponent>,
              private store: Store<CartState>) { }

  closeDialog() {
    this.dialogRef.close();
  }

  addToCart(product: Product){
    this.store.dispatch(CartActions.addProduct({product}));
  }
}
