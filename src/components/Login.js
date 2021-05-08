import React from "react";
import { accessUrl } from "../spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://cdn.designrush.com/uploads/inspiration_images/7279/_inspiration_images_683_410__1516917372_817_spo1.png"
        alt="spotify logo"
      />
      <a href={accessUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
