import React, { useEffect, useState, useRef } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import styleHeader from "../../../assets/css/styleHomeHeader.module.css";
import {
  getListWorkAction,
  getWorkByNameAction,
} from "../../../redux/Actions/WorkAction.";
import { WORK_NAME } from "../../../redux/Types/WorkType";
export default function Header() {
  let { listWorkSearch } = useSelector(
    (rootReducer) => rootReducer.WorkReducer
  );
  let { listWork } = useSelector((rootReducer) => rootReducer.WorkReducer);
  let { workNameValue } = useSelector((rootReducer) => rootReducer.WorkReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListWorkAction());
  }, []);
  useEffect(() => {
    dispatch(getWorkByNameAction(workNameValue));
  }, [workNameValue]);
  const typingTimeoutRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const renderListWork = () => {
    if (workNameValue.trim() !== "") {
      return listWorkSearch.map((workSearch, index) => {
        return (
          <li
            className="font-weight-bold"
            style={{ lineHeight: "35px" }}
            key={index}
          >
            <NavLink
              className="listWorkSearch"
              to={`/workdetail/${workSearch.congViec.maChiTietLoaiCongViec}/${workSearch.congViec.tenCongViec}`}
            >
              {workSearch.congViec.tenCongViec}
            </NavLink>
          </li>
        );
      });
    } else {
      return listWork?.map((work, index) => {
        return (
          <li
            className="font-weight-bold"
            style={{ lineHeight: "35px" }}
            key={index}
          >
            <NavLink
              className="listWorkSearch"
              to={`/workdetail/${work.maChiTietLoaiCongViec}/${work.tenCongViec}`}
            >
              {work.tenCongViec}
            </NavLink>
          </li>
        );
      });
    }
  };
  const handleChange = (event) => {
    let { name, value } = event.target;
    const newWorkName = value;
    dispatch({
      type: WORK_NAME,
      newWorkName: newWorkName,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleForcus = () => {
    let workBannerInput = document.getElementById("work_banner");
    workBannerInput.classList.toggle("workBanner");
  };
  const handleBlur = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef);
    }

    typingTimeoutRef.current = setTimeout(() => {
      let workBannerInput = document.getElementById("work_banner");
      workBannerInput.classList.remove("workBanner");
    }, 100);
  };

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
                onFocus={handleForcus}
                onBlur={handleBlur}
                onChange={handleChange}
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
