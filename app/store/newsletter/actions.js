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
      let text = await response.json();
      if (subscribed) {
          console.log("actions subscribe - subscribed, dispatching action");
          dispatch({
              type: types.NEWSLETTER_SUBSCRIBE_SUCCESS,
              email: email,
              response: {
                  status: response.status,
                  message: (text.email)?"Email " + text.email + " succesfull subscribed.":"succesfull subscribed"
              }
          });
      } else {
          console.log("actions subscribe - NOT subscribed");
          dispatch({
              type: types.NEWSLETTER_SUBSCRIBE_FAIL,
              email: email,
              response: {
                  status: response.status,
                  message: (text.email && text.email.length && text.email[0]) || "Unknown error"
              }
          });
      }
    } catch (error) {
      console.log("actions subscribe - Some error just happened");
      console.error(error);
    }
};
}

export function closeMessage() {
  return async(dispatch, getState) => {
    console.log("actions close - begin");
    dispatch({
              type: types.NEWSLETTER_MESSAGE_CLOSED
          });
    };
}
