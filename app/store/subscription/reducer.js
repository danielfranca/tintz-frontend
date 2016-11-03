import * as types from './actionTypes';

const initialState = {
  isSubscribed: false,
  email: undefined
};

export default function reduce(state = initialState, action = {}) {
    console.log("subscription reducer - begin");
    switch (action.type) {
        case types.SUBSCRIPTION_SUBSCRIBED:
            console.log("subscription reducer - types.SUBSCRIPTION_SUBSCRIBED");
            return {
                isSubscribed: true,
                email: action.email
            };
        default:
            console.log("subscription reducer - Nothing matched");
            return state;
    }
}

//Selectors
export function isSubscribed(state) {
    return state.isSubscribed;
}
