import {createSelector} from '@ngrx/store';
import {authState} from '../index';
import {statusProjector} from '../helpers';

export const getToken = createSelector(authState, state => state.token);
export const getUser = createSelector(authState, state => state.user);
export const getStatus = createSelector(authState, statusProjector);
