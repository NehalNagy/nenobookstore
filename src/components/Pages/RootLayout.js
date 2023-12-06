import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import { useEffect } from "react";
import { getTokenDuration } from "../../util/auth";

function RootLayout() {
  //Automatic logout after 1 hour (as specified in backend)
  const token = useLoaderData(); //implemets the loader of this route that is defined in app.js
  const submit = useSubmit(); //programatically submit a form

  useEffect(() => {
    if (!token) {
      return ;
    }
    if(token==='EXPIRED'){
      submit(null, { action: "/logout", method: "post" });
      return ;
    }
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
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
