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
import { USER_LOGIN } from "../../utils/setting";

export default function Header(props) {
  let { tenCongViec } = props.match.params;

  let { listWork, workNameValue, listMenuTypeWork, listWorkSearch } =
    useSelector((rootReducer) => rootReducer.WorkReducer);
  let { user } = useSelector((state) => state.UserReducer);
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
          <li style={{ height: "40px" }}>
            <a
              style={{ width: "180px" }}
              onMouseEnter={() => {
                let menuDsChiTiet = document.querySelectorAll("#menuDsChiTiet");
                for (let i = 0; i < menuDsChiTiet.length; i++) {
                  if (i === index) {
                    menuDsChiTiet[index].classList.add(
                      `${styleHeader["hiddenMenuDsChiTiet"]}`
                    );
                  }
                }
              }}
              href="#"
            >
              {menuWork.tenLoaiCongViec}
            </a>
            <div
              className="row mt-3"
              style={{
                position: "relative",
                backgroundColor: "white",
                listStyle: "none",
                padding: "20px",
                boxShadow: "20px 20px 50px 15px grey",
                zIndex: 50,
                opacity: "0",
                visibility: "hidden",
              }}
              onMouseLeave={() => {
                let menuDsChiTiet = document.querySelectorAll("#menuDsChiTiet");
                for (let i = 0; i < menuDsChiTiet.length; i++) {
                  if (i === index) {
                    menuDsChiTiet[index].classList.toggle(
                      `${styleHeader["hiddenMenuDsChiTiet"]}`
                    );
                  }
                }
              }}
              id="menuDsChiTiet"
            >
              {menuWork.dsNhomChiTietLoai.map((dsChiTiet, index) => {
                return (
                  <Fragment key={index}>
                    <div className="col-6 ">
                      <h6>
                        {dsChiTiet.tenNhom}
                        {dsChiTiet.dsChiTietLoai.map((loaiChiTiet, index) => {
                          return (
                            <a href="#" className="mt-4" key={index}>
                              {loaiChiTiet.tenChiTiet}
                            </a>
                          );
                        })}
                      </h6>
                    </div>
                  </Fragment>
                );
              })}
            </div>
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
              to={`/listworkdetail/${workSearch.congViec.maChiTietLoaiCongViec}/${workSearch.congViec.tenCongViec}`}
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
              to={`/listworkdetail/${work.maChiTietLoaiCongViec}/${work.tenCongViec}`}
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
  const renderUser = () => {
    if (localStorage.getItem(USER_LOGIN)) {
      return (
        <ul className={`${styleHeader["navbar-ul"]} navbar-nav`}>
          <li className={styleHeader["nav-item"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.5 20.167h5M4.295 11.87l-1.562 1.563a3.07 3.07 0 00-.9 2.171v0c0 .678.55 1.228 1.229 1.228h15.877c.678 0 1.228-.55 1.228-1.228v0a3.07 3.07 0 00-.9-2.171l-1.562-1.563a2.975 2.975 0 01-.872-2.104v-2.1A5.833 5.833 0 0011 1.833v0a5.833 5.833 0 00-5.833 5.834v2.1c0 .79-.314 1.546-.872 2.104z"
                stroke="#74767e"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className={styleHeader["nav-item"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={18}
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M.833 9.834v5A1.667 1.667 0 002.5 16.5h15a1.666 1.666 0 001.667-1.666v-5"
                stroke="#74767e"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M19.167 5.667v-2.5A1.667 1.667 0 0017.5 1.5h-15A1.667 1.667 0 00.833 3.167v2.5l9.167 5 9.167-5z"
                stroke="#74767e"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
            </svg>
          </li>
          <li className={styleHeader["nav-item"]}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z"
                fill="#74767e"
              ></path>
            </svg>
          </li>
          <i style={{ color: "white", fontSize: "30px", fontWeight: "600" }}>
            {user.email}
          </i>
          <li className={styleHeader["nav-item"]}>
            <div className="dropdown"></div>
            <button
              className={`${styleHeader["avatar"]} dropright`}
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundColor: "black",
                position: "relative",
              }}
            >
              <div className={styleHeader["avatar-text"]}>
                <i className="fa-regular fa-user"></i>
              </div>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              style={{ position: "absolute" }}
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      );
    } else
      return (
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
      );
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
            className={`collapse navbar-collapse justify-content-between`}
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
            {renderUser()}
          </div>
        </nav>
        <nav className={`${styleHeader["menuHeader"]}  container`}>
          <hr />
          <ul>{renderListMenuTypeWork()}</ul>
          <hr />
        </nav>
      </div>
    </Fragment>
  );
}
