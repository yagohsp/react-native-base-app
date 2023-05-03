import store from '../store';

import { setLoaderAction } from './reducer';

export const setLoader = value => store.dispatch(setLoaderAction(value));
