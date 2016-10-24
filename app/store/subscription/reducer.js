import * as types from './actionTypes';

const initialState = {
  isSubscribed: false,
  email: undefined
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SUBSCRIPTION_SUBSCRIBED:
            return {
                ...state,
                email: action.email
            };
        default:
            return state;
    }
}

//Selectors
export function isSubscribed(state) {
    return state.isSubscribed;
}
