import Home from "./components/Pages/HomePage/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import NewArrivals from "./components/Pages/NewArrivals";
import MyCart from "./components/Pages/MyCart";
import Authentication, {
  action as authAction,
} from "./components/account/Authentication";
import ErrorPage from "./components/ErrorPage";
import { action as logoutAction } from "./components/account/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import ItemsList from "./components/Pages/ItemsList";
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
    ],
  },
  {
    path: "account",
    element: <Authentication />,
    action: authAction,
  },
  {
    path: "mycart",
    element: <MyCart />,
    loader: checkAuthLoader,
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
