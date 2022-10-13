import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import styleHeader from "../../assets/css/styleHeader.module.css";

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
        <a
          className={`navbar-brand ${
            sticky ? `${styleHeader["sticky"]}` : ""
          } mr-5`}
          href="/home"
        >
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

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div
            className={`${sticky ? `${styleHeader["sticky"]}` : ""}`}
            style={{
              width: "45%",
              opacity: "0",
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
          <ul className="navbar-nav">
            <li className="nav-item active">
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
              <button className="btn btn-outline-info mr-3" href="#">
                Sign in
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-info">Join</button>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`${styleHeader["menuHeader"]}  ${
          sticky ? `${styleHeader["sticky"]}` : ""
        }`}
      >
        <hr />

        <ul>
          <li>
            <a href="/categories/graphics-design?source=category_tree">
              Graphics &amp; Design
            </a>
          </li>
          <li>
            <a href="/categories/digital-marketing?source=category_tree">
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
            <a href="/categories/programing-tech?source=category_tree">
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
  );
}
