import { BrowserRouter } from "react-router-dom";
import "./index.css"
import jwtDecode from "jwt-decode"
import AuthFunction from "./helpers/AuthFunction";
import ChooseRoute from "./helpers/ChooseRoute";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  const easysch_token =
  localStorage?.easysch_token && jwtDecode(localStorage?.easysch_token);
  const user = AuthFunction(easysch_token, localStorage)
  return (
    <>
    <ToastProvider>
      <BrowserRouter>
        {ChooseRoute(user)}
      </BrowserRouter>
    </ToastProvider>
    </>
  );
}

export default App;
