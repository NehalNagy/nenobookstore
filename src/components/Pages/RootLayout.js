import { Outlet } from "react-router-dom";
import Menu  from "../layout/Menu";
function RootLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
export default RootLayout;
