import axios from 'axios';

export const STORE_CRYPTO = 'STORE_CRYPTO';

export const tradingPairs = ['SYMBOL', 'BID', 'BID_SIZE', 'ASK', 'ASK_SIZE', 'DAILY_CHANGE', 'DAILY_CHANGE_RELATIVE', 'LAST_PRICE', 'VOLUME', 'HIGH', 'LOW'];
export const fundingPairs = ['FRR', 'BID', 'BID_PERIOD', 'BID_SIZE', 'ASK', 'ASK_PERIOD', 'ASK_SIZE', 'DAILY_CHANGE', 'DAILY_CHANGE_PERC', 'LAST_PRICE', 'VOLUME', 'HIGH', 'LOW', '_PLACEHOLDER', '_PLACEHOLDER', 'FRR_AMOUNT_AVAILABLE'];
const baseUrl = `https://api-pub.bitfinex.com/v2`
const pathParams = `tickers`;


export const fetchCryptos = (query) => {
  return async (dispatch, getState) => {
    const queryParams = "symbols=ALL" // Change based on relevant query params listed in the documentation

    try {
      const response = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`);
      const data = response.data
      // console.log('fetchAllCryptos :: data :: ', data);
      dispatch({
        type: STORE_CRYPTO,
        payload: data
      })
    } catch (error) {
      console.log(error);
      const errMsg = error.message;
    }
  }
}


