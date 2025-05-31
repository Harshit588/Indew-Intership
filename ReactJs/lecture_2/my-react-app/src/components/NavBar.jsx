import React from "react";
import Home from "./Home";

function NavBar() {
  return (
    <nav>
      <h1 className="text-3xl font-bolder text-blue-500">Hello Tailwind</h1>

      <div></div>
      <div className="bg-blue-600">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">SERVICE</a>
        <a href="">CONTACT</a>
        <a href="">DEVLOPER</a>
      </div>
    </nav>
  );
}

export default NavBar;
