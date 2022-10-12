import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import styleHeader from "../../assets/css/styleHeader.module.css";
import styleWorkDetail from "../../assets/css/styleWorkDetail.module.css";

export default function Header(props) {
  const handleForcus = () => {
    let inputSearch = document.querySelector(".overlay");
    console.log(inputSearch);
    inputSearch.classList.toggle(`${styleWorkDetail["overlayWorkDetail"]}`);
  };
  const handleBlur = () => {
    let inputSearch = document.querySelector(".overlay");
    console.log(inputSearch);
    inputSearch.classList.remove(`${styleWorkDetail["overlayWorkDetail"]}`);
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          width: "100%",
          height: "100%",
          opacity: "0",
          visibility: "hidden",
        }}
        className="overlay"
      ></div>
      <div>
        <nav
          style={{
            zIndex: "5",
          }}
          className="navbar navbar-expand-lg navbar-dark bg-dark px-5 align-items-baseline"
        >
          <NavLink
            className={`navbar-brand ${styleHeader["logo"]} mr-5`}
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
                  onFocus={handleForcus}
                  onBlur={handleBlur}
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
        <nav className={`${styleHeader["menuHeader"]}`}>
          <hr />
          <ul>
            <li>
              <a href="/categories/graphics-design?source=category_tree">
                Graphics &amp; Design
              </a>
            </li>
            <li>
              <a href="/categories/online-marketing?source=category_tree">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="/categories/writing-translation?source=category_tree">
                Writing &amp; Translation
              </a>
            </li>
            <li>
              <a href="/categories/video-animation?source=category_tree">
                Video &amp; Animation
              </a>
            </li>
            <li>
              <a href="/categories/music-audio?source=category_tree">
                Music &amp; Audio
              </a>
            </li>
            <li>
              <a href="/categories/programming-tech?source=category_tree">
                Programming &amp; Tech
              </a>
            </li>
            <li>
              <a href="/categories/business?source=category_tree">Business</a>
            </li>
            <li>
              <a href="/categories/lifestyle?source=category_tree">Lifestyle</a>
            </li>
            <li>
              <p className="m-0">Trending</p>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </Fragment>
  );
}
