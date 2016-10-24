import * as types from './actionTypes';
import * as topicsSelectors from './reducer';
import * as p from 'babel-polyfill';

export function subscribe(email) {
  return async(dispatch, getState) => {
    try {
      const subscribed = await subscription.subscribe(email);
      if (subscribed) {
          dispatch({ type: types.SUBSCRIPTION_SUBSCRIBED, email});
      }
    } catch (error) {
      console.error(error);
    }
  };
}
