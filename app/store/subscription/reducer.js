import * as types from './actionTypes';

const initialState = {
  isSubscribed: false,
  email: null,
  response: { status: null, message: null }
};

export default function reduce(state = initialState, action = {}) {
    console.log("subscription reducer - begin");
    switch (action.type) {
        case types.SUBSCRIPTION_SUBSCRIBED:
            console.log("subscription reducer - types.SUBSCRIPTION_SUBSCRIBED: ", action);
            return {
                isSubscribed: true,
                email: action.email,
                response: action.response
            };
        case types.SUBSCRIPTION_FAILED:
            console.log("subscription reducer - types.SUBSCRIPTION_FAILED: ", action);
            return {
                isSubscribed: false,
                email: action.email,
                response: action.response
            };
        default:
            console.log("subscription reducer - Nothing matched");
            return state;
    }
}

//Selectors
export function isSubscribed(state) {
    return state.subscription.isSubscribed || false;
}

export function Message(state) {
    return (state.subscription.response)?state.subscription.response.message:"";
};

export function StatusCode(state) {
    return (state.subscription.response)?state.subscription.response.status:null;
};
