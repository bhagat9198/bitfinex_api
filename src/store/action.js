import axios from 'axios';

export const STORE_CRYPTO = 'STORE_CRYPTO';
export const CRYPTO_SELECTED = 'CRYPTO_SELECTED';

export const tradingPairs = ['SYMBOL', 'BID', 'BID_SIZE', 'ASK', 'ASK_SIZE', 'DAILY_CHANGE', 'DAILY_CHANGE_RELATIVE', 'LAST_PRICE', 'VOLUME', 'HIGH', 'LOW'];
export const fundingPairs = ['FRR', 'BID', 'BID_PERIOD', 'BID_SIZE', 'ASK', 'ASK_PERIOD', 'ASK_SIZE', 'DAILY_CHANGE', 'DAILY_CHANGE_PERC', 'LAST_PRICE', 'VOLUME', 'HIGH', 'LOW', '_PLACEHOLDER', '_PLACEHOLDER', 'FRR_AMOUNT_AVAILABLE'];
const baseUrl = `https://api-pub.bitfinex.com/v2`
const pathParams = `tickers`;


export const getqueryParams = (query) => {
  return async (dispatch, getState) => {
    console.log('fetchCryptos :: query :: ', query);
    let queryParams;
    if (!query) {
      queryParams = "symbols=ALL";
    } else {
      query = query.toUpperCase();
      const allCryptos = getState().reducer.cryptos;
      let cryptoMatch = ''
      allCryptos.forEach(crypto => {
        const qt = `t${query}`;
        const qf = `f${query}`;
        if (crypto[0].includes(qt)) {
          cryptoMatch = cryptoMatch + crypto[0] + ','
        } else if (crypto[0].includes(qf)) {
          cryptoMatch = cryptoMatch + crypto[0] + ','
        } else {
          // no match
        }
      })
      queryParams = `symbols=${cryptoMatch}`
    }

    return queryParams;
  }
}

export const fetchCryptos = (queryParams) => {
  return async (dispatch, getState) => {

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

export const cryptoSelected = (crypto) => {
  return (dispatch) => {
    dispatch({
      type: CRYPTO_SELECTED,
      payload: crypto
    })
  }
}

