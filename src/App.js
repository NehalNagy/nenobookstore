import Home from "./components/Pages/HomePage/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout";
import NewArrivals from "./components/Pages/NewArrivals";
import Authentication, {
  action as authAction,
} from "./components/account/Authentication";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "newArrivals", element: <NewArrivals /> },
    ],
  },
  {
    path: "account",
    element: <Authentication />,
    action: authAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
