import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styleWorkDetail from "../../assets/css/styleWorkDetail.module.css";
import {
  getListWorkAction,
  getWorkByNameAction,
} from "../../redux/Actions/WorkAction.";
import { Rate } from "antd";
import { history } from "../../App";
import { HIDE_LOADING, SHOW_LOADING } from "../../redux/Types/LoaddingType";
import Loadding from "../../components/Loadding/Loadding";
import { WORK_NAME } from "../../redux/Types/WorkType";

export default function ListWorkDetail(props) {
  let { tenCongViec } = props.match.params;
  let { listWork, listWorkSearch, workNameValue } = useSelector(
    (rootReducer) => rootReducer.WorkReducer
  );
  const typingTimeoutRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListWorkAction());
  }, []);
  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_LOADING,
      });
    }, 2000);
  }, [tenCongViec]);
  useEffect(() => {
    dispatch(getWorkByNameAction(workNameValue));
  }, [workNameValue]);
  const renderListWork = () => {
    if (workNameValue.trim() != "") {
      return listWorkSearch?.map((work, index) => {
        return (
          <div
            onClick={() => {
              history.push(
                `/workdetail/${work.congViec.maChiTietLoaiCongViec}`
              );
            }}
            key={index}
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "white",
              border: "1px solid #e4e5e7",
              cursor: "pointer",
            }}
            className="card"
          >
            <img
              src={work.congViec.hinhAnh}
              className="card-img-top"
              alt="..."
            />
            <div className="overlay-listWork"></div>
            <div className="card-body">
              <h6
                style={{ display: "flex", alignItems: "center" }}
                className="card-title"
              >
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    width: "50px",
                    height: "50px",
                  }}
                  src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
                  alt=""
                />
                <span style={{ color: "#FFA500" }} className="ml-2">
                  Admin
                </span>
              </h6>
              <h5 className="card-text">
                {work.congViec.tenCongViec?.length > 10
                  ? work.congViec.tenCongViec.slice(0, 37) + "..."
                  : work.congViec.tenCongViec}
              </h5>

              <div
                style={{
                  color: "#b5b6ba",
                  fontWeight: "400",
                }}
              >
                <Rate allowHalf defaultValue={work.congViec.saoCongViec} />
                <span className="ml-2">({work.congViec.danhGia})</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <a
                  style={{
                    color: "red",
                  }}
                  href="#"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
                <button className="btn btn-outline-success">
                  Starting at
                  <span className="ml-2">{work.congViec.giaTien}$</span>
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return listWork?.map((work, index) => {
        return (
          <div
            onClick={() => {
              history.push(`/workdetail/${work.maChiTietLoaiCongViec}`);
            }}
            key={index}
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "white",
              border: "1px solid #e4e5e7",
              cursor: "pointer",
            }}
            className="card"
          >
            <img src={work.hinhAnh} className="card-img-top" alt="..." />
            <div className="overlay-listWork"></div>
            <div className="card-body">
              <h6
                style={{ display: "flex", alignItems: "center" }}
                className="card-title"
              >
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    width: "50px",
                    height: "50px",
                  }}
                  src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
                  alt=""
                />
                <span style={{ color: "#FFA500" }} className="ml-2">
                  Admin
                </span>
              </h6>
              <h5 className="card-text">
                {work.tenCongViec.length > 10
                  ? work.tenCongViec.slice(0, 37) + "..."
                  : work.tenCongViec}
              </h5>

              <div
                style={{
                  color: "#b5b6ba",
                  fontWeight: "400",
                }}
              >
                <Rate allowHalf defaultValue={work.saoCongViec} />
                <span className="ml-2">({work.danhGia})</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <a
                  style={{
                    color: "red",
                  }}
                  href="#"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
                <button className="btn btn-outline-success">
                  Starting at
                  <span className="ml-2">{work.giaTien}$</span>
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  const handleChange = (event) => {
    let { name, value } = event.target;
    const newWorkName = value;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef);
    }
    typingTimeoutRef.current = setTimeout(() => {
      dispatch({
        type: WORK_NAME,
        newWorkName: newWorkName,
      });
    }, 500);
  };
  return (
    <div className="container">
      <header className={`${styleWorkDetail["main"]}`}>
        <nav className={`${styleWorkDetail["main-content"]}`}>
          <b>Suggested</b>
          <div>
            <a href="#">Fiverr FreeDancer</a>
            <a href="#">Fiverr FreeDancer</a>
            <a href="#">Fiverr FreeDancer</a>
            <a href="#">Fiverr FreeDancer</a>
            <a href="#">Fiverr FreeDancer</a>
          </div>
        </nav>
      </header>
      <div className={`${styleWorkDetail["results"]}`}>
        <div className={`${styleWorkDetail["results-header"]}`}>
          <span className={`${styleWorkDetail["title"]}`}>
            Results for "{tenCongViec}"
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className={`${styleWorkDetail["floating-top-bar"]}`}>
            <div className={`${styleWorkDetail["top-filters"]}`}>
              <div className={`${styleWorkDetail["top-filters-button"]}`}>
                Category
                <span style={{ width: 10, height: 10, marginLeft: "12px" }}>
                  <svg
                    width={11}
                    height={7}
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                  </svg>
                </span>
              </div>
              <div className={`${styleWorkDetail["top-filters-button"]}`}>
                Service Options
                <span style={{ width: 10, height: 10, marginLeft: "12px" }}>
                  <svg
                    width={11}
                    height={7}
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                  </svg>
                </span>
              </div>
              <div className={`${styleWorkDetail["top-filters-button"]}`}>
                Seller Details
                <span style={{ width: 10, height: 10, marginLeft: "12px" }}>
                  <svg
                    width={11}
                    height={7}
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                  </svg>
                </span>
              </div>
              <div className={`${styleWorkDetail["top-filters-button"]}`}>
                Budget
                <span style={{ width: 10, height: 10, marginLeft: "12px" }}>
                  <svg
                    width={11}
                    height={7}
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                  </svg>
                </span>
              </div>
              <div className={`${styleWorkDetail["top-filters-button"]}`}>
                Delivery Time
                <span style={{ width: 10, height: 10, marginLeft: "12px" }}>
                  <svg
                    width={11}
                    height={7}
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <ul className={`${styleWorkDetail["togglers-wrapper"]}`}>
                <li className="mr-4">
                  <span>Pro services</span>
                </li>
                <li className="mr-4">
                  <span>Local sellers</span>
                </li>
                <li>
                  <span>Online sellers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <form>
          <div className="form-group d-flex justify-content-end">
            <input
              style={{ width: "50%" }}
              className="form-control"
              placeholder="Search work name...."
              id="workName"
              name="workName"
              onChange={handleChange}
            />
          </div>
        </form>

        <div
          style={{
            width: "100%",
          }}
          className="d-flex"
        >
          <div className={`${styleWorkDetail["gird-card"]}`}>
            {renderListWork()}
          </div>
        </div>
      </div>
      <Loadding />
    </div>
  );
}
