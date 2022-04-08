import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/global.css';

import Docs from "./pages/Docs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />

      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
