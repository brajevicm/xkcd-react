import React from "react";

export const Navbar = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo center">{title}</a>
      </div>
    </nav>
  );
};
