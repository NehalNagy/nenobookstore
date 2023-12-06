import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
export function tokenLoader() {
  return getAuthToken();
}
export function checkAuthLoader() {
  //tis function is used to protect routes. to prevent users from navigating manually to the url. add this loader to every route you want to protect.
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
