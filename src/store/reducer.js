import { CRYPTO_SELECTED, STORE_CRYPTO } from "./action";


const initialState = {
  cryptos: false,
  cryptoSelected: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CRYPTO:
      // console.log('reducer :: action :: ', action);
      return {
        ...state,
        cryptos: action.payload
      }
    case CRYPTO_SELECTED:
      return {
        ...state,
        cryptoSelected: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
