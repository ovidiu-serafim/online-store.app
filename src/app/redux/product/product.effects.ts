import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../../shared/services/product.service";
import * as ProductActions from './product.actions';
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService) {}

  productListRequest$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.requestList),
    mergeMap(() => this.productService.getProducts().pipe(
      map((products) => ProductActions.requestListSuccess({products})),
      catchError((error) => of(ProductActions.requestListFailure({ error })))
    ))
  ));
}
