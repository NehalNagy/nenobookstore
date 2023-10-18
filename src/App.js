import { Fragment } from "react";
import "./App.css";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage/Home";
function App() {
  return (
    <Fragment>
      <Menu></Menu>
      <Home/>
    </Fragment>
  );
}

export default App;
