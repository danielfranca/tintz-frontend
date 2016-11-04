import * as types from './actionTypes';
import * as topicsSelectors from './reducer';
import * as p from 'babel-polyfill';
import subscriptionService from '../../services/subscription';

export function subscribe(email) {
  return async(dispatch, getState) => {
    console.log("actions subscribe - begin");
    try {
      console.log("actions subscribe - call service for subscribe");
      let [subscribed, response] = await subscriptionService.subscribe(email);
      let text = await response.text();
      if (subscribed) {
          console.log("actions subscribe - subscribed, dispatching action");
          dispatch({
              type: types.SUBSCRIPTION_SUBSCRIBED,
              email: email,
              response: {
                  status: response.status,
                  message: text
              }
          });
      } else {
          console.log("actions subscribe - NOT subscribed");
          dispatch({
              type: types.SUBSCRIPTION_FAILED,
              email: email,
              response: {
                  status: response.status,
                  message: text
              }
          });
      }
    } catch (error) {
      console.log("actions subscribe - Some error just happened");
      console.error(error);
    }
};
}
