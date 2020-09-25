import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "../components/UserContext";
import SignOutBtn from "../components/SignOutBtn";
import Favs from "../components/Favs";
//import SetUserContext from "../components/User";

function AccountPage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="page-title">Account</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <SignOutBtn />
      <Favs />
    </div>
  );
}

export default AccountPage;
