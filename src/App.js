import Home from "./components/Pages/HomePage/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import NewArrivals from "./components/Pages/NewArrivals";
import Cart from "./components/Pages/Cart/Cart";
import Authentication, {
  action as authAction,
} from "./components/account/Authentication";
import ErrorPage from "./components/ErrorPage";
import { action as logoutAction } from "./components/account/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import ItemsList from "./components/Pages/Products/ItemsList";
import MyAccountLayout from "./components/account/MyAccount/MyAccountLayout";
import MyAccount from "./components/account/MyAccount/MyAccount";
import MyOrders from "./components/account/MyAccount/MyOrders";
import MyWishlist from "./components/account/MyAccount/MyWishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "newArrivals", element: <NewArrivals /> },
      { path: "products", element: <ItemsList /> },
      {
        path: "cart",
        element: <Cart />,
        // loader: checkAuthLoader,
      },
      {
        path: "/",
        element: <MyAccountLayout />,
        // loader: checkAuthLoader,
        children: [
          { path: "myaccount", element: <MyAccount /> },
          { path: "myorders", element: <MyOrders /> },
          { path: "mywishlist", element: <MyWishlist /> },
        ],
      },
    ],
  },
  {
    path: "account",
    element: <Authentication />,
    action: authAction,
  },

  {
    path: "logout",
    action: logoutAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
