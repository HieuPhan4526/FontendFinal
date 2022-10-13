import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import styleHeader from "../../../assets/css/styleHomeHeader.module.css";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${styleHeader["header"]} ${
        sticky ? `${styleHeader["sticky"]}` : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-5 align-items-baseline">
        <NavLink
          style={{
            fontSize: "30px",
            fontWeight: "900",
          }}
          className={`navbar-brand ${
            sticky ? `${styleHeader["sticky"]}` : ""
          } mr-5`}
          to="/home"
        >
          Fiiverr.
        </NavLink>
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div
            className={`${sticky ? `${styleHeader["sticky"]}` : ""}`}
            style={{
              width: "45%",
              opacity: "0",
              visibility: "hidden",
            }}
          >
            <form className="d-flex">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <ul className={`navbar-nav ${styleHeader["nav_active"]}`}>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  sticky ? `${styleHeader["sticky"]}` : ""
                }`}
                href="#"
              >
                Fiverr Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  sticky ? `${styleHeader["sticky"]}` : ""
                }`}
                href="#"
              >
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  sticky ? `${styleHeader["sticky"]}` : ""
                }`}
                href="#"
              >
                <i className="fa-solid fa-earth-asia mr-3"></i>
                <span>EngLish</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  sticky ? `${styleHeader["sticky"]}` : ""
                }`}
                href="#"
              >
                Become a Seller
              </a>
            </li>

            <li className="nav-item">
              <button
                onClick={() => {
                  history.push("/register");
                }}
                className="btn btn-outline-info mr-3"
                href="#"
              >
                Sign in
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  history.push("/login");
                }}
                className="btn btn-outline-info"
              >
                Join
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

{
  /* <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 align-items-baseline">
  <NavLink className={`navbar-brand mr-5`} to="/home">
    Fiiverr.
  </NavLink>
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
  <div
    className="collapse navbar-collapse justify-content-between"
    id="navbarSupportedContent"
  >
    <div
      style={{
        width: "45%",
      }}
    >
      <form className="d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
    <ul className={`navbar-nav`}>
      <li className="nav-item">
        <a className={`nav-link`} href="#">
          Fiverr Business
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link`} href="#">
          Explore
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link`} href="#">
          <i className="fa-solid fa-earth-asia mr-3"></i>
          <span>EngLish</span>
        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link`} href="#">
          Become a Seller
        </a>
      </li>

      <li className="nav-item">
        <button
          onClick={() => {
            history.push("/register");
          }}
          className="btn btn-outline-info mr-3"
          href="#"
        >
          Sign in
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => {
            history.push("/login");
          }}
          className="btn btn-outline-info"
        >
          Join
        </button>
      </li>
    </ul>
  </div>
</nav>
</div> */
}
