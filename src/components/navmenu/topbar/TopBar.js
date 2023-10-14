import React from "react";

function hideTopBar() {
    document.getElementById("top-bar").style.display = "none";
  }

function TopBar() {
  return (
    <div className="top-bar" id="top-bar">
      <div className="content">
        <p id="sign_text">
          Sign up and get off to your first order.
          <a href="#" id="sign_text_link">
            Sign Up Now
          </a>
        </p>
        <button className="close-button" onClick={hideTopBar}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default TopBar;