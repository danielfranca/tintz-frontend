import * as types from './actionTypes';
import * as topicsSelectors from './reducer';
import * as p from 'babel-polyfill';
import subscriptionService from '../../services/subscription';

export function subscribe(email) {
  return async(dispatch, getState) => {
    console.log("actions subscribe - begin");
    try {
      console.log("actions subscribe - call service for subscribe");
      const subscribed = await subscriptionService.subscribe(email);
      if (subscribed) {
          console.log("actions subscribe - subscribed, dispatching action");
          dispatch({ type: types.SUBSCRIPTION_SUBSCRIBED, email});
      } else {
          console.log("actions subscribe - NOT subscribed");
      }
    } catch (error) {
      console.log("actions subscribe - Some error just happened");
      console.error(error);
    }
};
}
