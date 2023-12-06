import { redirect } from "react-router-dom";

export function getTokenDuration(){
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now  = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if(!token){
    return null;
  }
  const tokenDuration = getTokenDuration();

  if(tokenDuration<0){
    return 'EXPIRED';
  }

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
