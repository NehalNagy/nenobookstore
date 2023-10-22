import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";

function RootLayout() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
