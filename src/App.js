import Home from "./pages/Home";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/global.css';
import { useSelector } from "react-redux";

function App() {
  const storeState = useSelector(state => state.reducer);
  const allCryptos = storeState.cryptos;

  if (!allCryptos) {
    toast.warning("Please Wait. Fetching Cryptos.")
  }
  if (allCryptos && allCryptos.length === 0) {
    toast.error("Please try with differnt search.")
  }
  // if (allCryptos && allCryptos.length > 0) {
  //   toast.success("Cryptos found")
  // }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <Home />
    </div>
  );
}

export default App;
