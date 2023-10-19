import { Fragment } from "react";
import Menu from "./components/layout/Menu";
import Home from "./components/Pages/HomePage/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import NewArrivals from './components/Pages/NewArrivals';


const router = createBrowserRouter([
  { path:'/', element:<RootLayout/>,children:[
    { index: true,element: <Home /> },
    { path:"newArrivals",element:<NewArrivals />},
  ]},
]
);



function App() {
  return (
    <RouterProvider router={router} />
    // <Fragment>
    //   <Menu/>
    //   <Home/>
    // </Fragment>
  );
}

export default App;
