import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const loggingOut = () => {
    window.sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__container--h1">Successfully Logged IN</h1>
        <button className="logout__button" onClick={loggingOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
