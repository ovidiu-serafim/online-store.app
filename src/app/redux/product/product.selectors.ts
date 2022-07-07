import { createSelector } from '@ngrx/store';
import { productState } from "../index";

export const getProducts = createSelector(productState, state => state.products);

export const selectSortKey = createSelector(productState, state => state.sortKey);
export const selectProducts = createSelector(productState, state => state.products);
export const selectFilterQuery = createSelector(productState, state => state.filterQuery);
export const selectFilterBy = createSelector(productState, state => state.filterBy);

export const selectSortedProducts = createSelector(
  selectProducts,
  selectFilterQuery,
  selectFilterBy,
  selectSortKey,
  (products, query, filters, sortKey) => {
    if (!query) {
      return products;
    }

    return products.filter((item) => {
      let isFound = false;

      for (const filter of filters) {
        if (!item.hasOwnProperty(filter)) {
          continue;
        }

        switch (filter) {
          case 'name':
          case 'img':
            isFound = item[filter].toLowerCase().includes(query);
            break;

          case 'price':
            isFound = item[filter] === Number(query);
            break;
        }

        if (isFound) {
          break;
        }
      }

      return isFound;
    });
  }
)
