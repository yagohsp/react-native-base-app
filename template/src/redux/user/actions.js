import store from '../store';

import { setUserAction, clearUserAction } from './reducer';

export const setUser = value => store.dispatch(setUserAction(value));
export const clearUser = value => store.dispatch(clearUserAction(value));
