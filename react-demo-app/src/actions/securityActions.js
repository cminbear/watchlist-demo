import axios from "axios";
import { GET_WATCHLIST, GET_SECURITY, GET_MARKET_DATA } from "./types";

export const getWatchlist = () => async dispatch => {
    const res = await axios.get("https://watchlist-rest-api.herokuapp.com/trade/security/watchlist");
    dispatch({
        type: GET_WATCHLIST,
        payload: res.data
    });
};

export const getSecurity = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/${id}`);
    dispatch({
        type: GET_SECURITY,
        payload: res.data
    });
}

export const updateSecurityOnWatchlist = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/updateOnWatchlist?id=${id}`);
    dispatch({
        type: GET_SECURITY,
        payload: res.data
    });
};

export const restartWatchlist = () => async dispatch => {
    const res = await axios.get("https://watchlist-rest-api.herokuapp.com/trade/security/restart");
    dispatch({
        type: GET_WATCHLIST,
        payload: res.data
    });
}

export const getMarketDataOneWeek = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/marketDataOneWeek?id=${id}`);
    dispatch({
        type: GET_MARKET_DATA,
        payload: res.data
    });
}

export const getMarketDataOneMonth = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/marketDataOneMonth?id=${id}`);
    dispatch({
        type: GET_MARKET_DATA,
        payload: res.data
    });
}

export const getMarketDataThreeMonths = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/marketDataThreeMonths?id=${id}`);
    dispatch({
        type: GET_MARKET_DATA,
        payload: res.data
    });
}

export const getMarketDataOneYear = (id) => async dispatch => {
    const res = await axios.get(`https://watchlist-rest-api.herokuapp.com/trade/security/marketDataOneYear?id=${id}`);
    dispatch({
        type: GET_MARKET_DATA,
        payload: res.data
    });
}