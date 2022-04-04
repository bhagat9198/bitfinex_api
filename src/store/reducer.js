import { STORE_CRYPTO } from "./action";


const initialState = {
  cryptos: [],
  selectedCrypto: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CRYPTO:
      // console.log('reducer :: action :: ', action);
      return {
        ...state,
        cryptos: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
