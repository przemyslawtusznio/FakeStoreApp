import { ActionTypes } from "../constants/action-types";
import { AnyAction } from "redux";

const initialState = {
    authState: false,
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_AUTH_STATE:
            return {
                authState: action.payload
            }
        default:
            return state;
    }
}