import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {QuickViewComponent} from "../quick-view/quick-view.component";
import {Product} from "../../shared/models/product";
import {Store} from "@ngrx/store";
import {ProductState} from "../../redux/product/product.reducer";
import * as ProductActions from "../../redux/product/product.actions";
import * as ProductSelectors from "../../redux/product/product.selectors";
import * as CartActions from "../../redux/cart/cart.actions";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  products: Product[] = [];
  selectedProduct?: Product;

  constructor(public dialog: MatDialog,
              private store: Store<ProductState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.requestList());
    this.store.select(ProductSelectors.getProducts).subscribe( products => this.products = products);
  }

  openDialog(product: Product){
    const dialogRef = this.dialog.open(QuickViewComponent, {
      data: {
        productName: product.name,
        productPrice: product.price,
        productImage: product.img,
      }
    });

    const dialogSubmitSubscription =
      dialogRef.componentInstance.submitClicked.subscribe(result => {
        dialogSubmitSubscription.unsubscribe();
      });
  }

  addToCart(product: Product) {
    console.log({product});
    this.store.dispatch(CartActions.addProduct({ product }));
  }
}
