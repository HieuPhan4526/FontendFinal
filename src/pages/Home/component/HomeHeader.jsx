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
import { TOKEN, USER_LOGIN } from "../../../utils/setting";
import { SIGN_OUT } from "../../../redux/Types/UserTypes";
export default function Header() {
  let { listWork, workNameValue, listWorkSearch } = useSelector(
    (rootReducer) => rootReducer.WorkReducer
  );
  let { user } = useSelector((rootReducer) => rootReducer.UserReducer);
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
          <li className="font-weight-bold" key={index}>
            <hr />
            <NavLink
              className="listWorkSearch"
              to={`/listworkdetail/${workSearch.congViec.tenCongViec}`}
            >
              <p>{workSearch.congViec.tenCongViec}</p>
            </NavLink>
            <hr />
          </li>
        );
      });
    } else {
      return listWork?.map((work, index) => {
        return (
          <li className="font-weight-bold" key={index}>
            <hr />
            <NavLink
              className="listWorkSearch"
              to={`/listworkdetail/${work.tenCongViec}`}
            >
              <p>{work.tenCongViec}</p>
            </NavLink>
            <hr />
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
    let { value } = event.target[0];
    history.push(`/${value}`);
  };
  const handleForcus = () => {
    let workBannerInput = document.getElementById("work_bannerHeader");
    workBannerInput.classList.toggle("workBannerHeader");
  };
  const handleBlur = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef);
    }
    typingTimeoutRef.current = setTimeout(() => {
      let workBannerInput = document.getElementById("work_bannerHeader");
      workBannerInput.classList.remove("workBannerHeader");
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
          <i
            className={`email-user ${
              sticky ? `${styleHeader["sticky-user"]}` : ""
            }`}
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
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
              <NavLink className="dropdown-item" to={`/profile/${user.id}`}>
                Profile
              </NavLink>
              <a className="dropdown-item" href="#">
                Manage Request
              </a>
              <a className="dropdown-item" href="#">
                Refer a Friend
              </a>
              <hr />
              <a className="dropdown-item" href="#">
                Become a Seller
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Billing
              </a>
              <hr />
              <a className="dropdown-item" href="#">
                English
              </a>
              <a className="dropdown-item" href="#">
                US$ USD
              </a>
              <a className="dropdown-item" href="#">
                Help & Support
              </a>
              <hr />
              <a
                className="dropdown-item"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  dispatch({
                    type: SIGN_OUT,
                  });
                }}
                href="#"
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`navbar-nav ${styleHeader["nav_active"]}`}>
          <li className="nav-item">
            <a
              className={`nav-link ${
                sticky ? `${styleHeader["sticky-text"]}` : ""
              }`}
              href="#"
            >
              Fiverr Business
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                sticky ? `${styleHeader["sticky-text"]}` : ""
              }`}
              href="#"
            >
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                sticky ? `${styleHeader["sticky-text"]}` : ""
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
                sticky ? `${styleHeader["sticky-text"]}` : ""
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
              Sign up
            </button>
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
    }
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
            sticky ? `${styleHeader["sticky-logo"]}` : ""
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
          <i className="fa-solid fa-bars" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div
            className={`${sticky ? `${styleHeader["sticky-form"]}` : ""}`}
            style={{
              width: "45%",
              opacity: "0",
              visibility: "hidden",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="d-flex align-items-center "
            >
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
            <ul
              className="mt-2"
              id="work_bannerHeader"
              style={{
                position: "absolute",
                backgroundColor: "white",
                listStyle: "none",
                padding: "20px",
                boxShadow: "20px 20px 50px 15px grey",
                height: "auto",
                display: "none",
                zIndex: "99",
                height: "300px",
                overflowY: "auto",
              }}
            >
              {renderListWork()}
            </ul>
          </div>
          {renderUser()}
        </div>
      </nav>
    </div>
  );
}
