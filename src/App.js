import Home from "./pages/Home";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/global.css';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom'
import Docs from "./pages/Docs";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
