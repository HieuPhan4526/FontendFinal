import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styleWorkDetail from "../../assets/css/styleWorkDetail.module.css";
import { getListWorkAction } from "../../redux/Actions/WorkAction.";
import { Rate } from "antd";

export default function WorkDetail(props) {
  let { maChiTietLoaiCongViec, tenCongViec } = props.match.params;
  let { listWork } = useSelector((rootReducer) => rootReducer.WorkReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListWorkAction());
  }, []);
  console.log(listWork);
  const renderListWork = () => {
    return listWork.map((work, index) => {
      return (
        <div
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
          <div className="card-body">
            <h6 style={{ display: "flex" }} className="card-title">
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
              <p className="card-text">{work.tenCongViec}</p>
            </h6>
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
                <i class="fa-solid fa-heart"></i>
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
  };
  return (
    <div>
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
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
    </div>
  );
}
