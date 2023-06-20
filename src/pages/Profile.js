import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";
import './profile.css'

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="uDetails">
        <div className="mainTab">
          <p className="circle">{user.name[0]}</p>
          <h1 className="uName">{user.name}</h1>
        </div>
        <h1 className="uEmail">{user.email}</h1>
        <h1 className="uId">{user.uid}</h1>
      </div>
      <div className="logOut">
        <Button  text={"Logout"} onClick={handleLogout} />
      </div>
      
    </div>
  );
}

export default Profile;
