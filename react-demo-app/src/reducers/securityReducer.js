import { GET_MARKET_DATA, GET_SECURITY, GET_WATCHLIST } from "../actions/types";

const initialState = {
    watchlist: [],
    security: {},
    marketData: {},
    loaded: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_WATCHLIST:
            return {
                ...state,
                watchlist: action.payload,
                loaded: true
            };

        case GET_SECURITY:
            return {
                ...state,
                security: action.payload
            };

        case GET_MARKET_DATA:
            return {
                ...state,
                marketData: action.payload
            };
        default:
            return state;
    }
}