import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import styleHeader from "../../assets/css/styleHeader.module.css";
import styleWorkDetail from "../../assets/css/styleWorkDetail.module.css";
import {
  getListWorkAction,
  getMenuTypeWork,
  getWorkByNameAction,
} from "../../redux/Actions/WorkAction.";
import { WORK_NAME } from "../../redux/Types/WorkType";

export default function Header(props) {
  let { tenCongViec } = props.match.params;
  let { listWorkSearch } = useSelector(
    (rootReducer) => rootReducer.WorkReducer
  );
  let { listWork, workNameValue, listMenuTypeWork } = useSelector(
    (rootReducer) => rootReducer.WorkReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListWorkAction());
    dispatch(getMenuTypeWork());
  }, []);
  useEffect(() => {
    dispatch(getWorkByNameAction(workNameValue));
  }, [workNameValue]);

  const typingTimeoutRef = useRef(null);
  const renderListMenuTypeWork = () => {
    return listMenuTypeWork.map((menuWork, index) => {
      return (
        <Fragment key={index}>
          <li>
            <a href="#">{menuWork.tenLoaiCongViec}</a>
          </li>
        </Fragment>
      );
    });
  };

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
              to={`/workdetail/${workSearch.congViec.tenCongViec}`}
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
              to={`/workdetail/${work.tenCongViec}`}
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
    let inputSearch = document.querySelector(".overlay");
    inputSearch.classList.toggle(`${styleWorkDetail["overlayWorkDetail"]}`);
    let workBannerInput = document.getElementById("work_banner");
    workBannerInput.classList.toggle("workBanner");
  };
  const handleBlur = () => {
    let inputSearch = document.querySelector(".overlay");
    inputSearch.classList.remove(`${styleWorkDetail["overlayWorkDetail"]}`);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef);
    }

    typingTimeoutRef.current = setTimeout(() => {
      let workBannerInput = document.getElementById("work_banner");
      workBannerInput.classList.remove("workBanner");
    }, 100);
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
              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder={tenCongViec}
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
              <ul
                id="work_banner"
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  listStyle: "none",
                  padding: "20px",
                  boxShadow: "20px 20px 50px 15px grey",
                  opacity: "0",
                  visibility: "hidden",
                }}
              >
                {renderListWork()}
              </ul>
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
          <ul>{renderListMenuTypeWork()}</ul>
          <hr />
        </nav>
      </div>
    </Fragment>
  );
}
