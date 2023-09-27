import Footer from "./components/Footer";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import useAuthCheck from "./hooks/useCheckAuth";


function App() {

  useAuthCheck();

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
