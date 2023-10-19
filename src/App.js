import { Fragment } from "react";
import Menu from "./components/layout/Menu";
import Home from "./components/Pages/HomePage/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const router = createBrowserRouter([
//   { path:'/', element:<Menu/>},
// ]
// );



function App() {
  return (
    <Fragment>
      <Menu></Menu>
      <Home/>
    </Fragment>
  );
}

export default App;
