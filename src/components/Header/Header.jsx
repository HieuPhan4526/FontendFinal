import React from "react";
import { Fragment } from "react";

export default function Header() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: "99",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-5">
        <a className="navbar-brand" href="#">
          Fiiverr.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Become a Seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Sign In</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-info">Join</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
