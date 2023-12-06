import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import { useEffect } from "react";

function RootLayout() {
  //Automatic logout after 1 hour (as specified in backend)
  const token = useLoaderData(); //implemets the loader of this route that is defined in app.js
  const submit = useSubmit(); //programatically submit a form

  useEffect(() => {
    if (!token) {
      return;
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
