import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailWorkAction,
  hireAJobAction,
} from "../../redux/Actions/WorkAction.";
import { Tabs } from "antd";
import { Rate } from "antd";
import styleDetailWork from "../../assets/css/styleWorkDetail.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";

import { getWorkOfCommentAction } from "../../redux/Actions/CommentAction";
import { TOKEN, USER_LOGIN } from "../../utils/setting";
import { history } from "../../App";

const onChange = (key) => {
  console.log(key);
};
const menu = (
  <Menu
    selectable
    defaultSelectedKeys={["1"]}
    items={[
      {
        key: "1",
        label: <h5 className="p-2">Most recent</h5>,
      },
      {
        key: "2",
        label: <h5 className="p-2">Most relevant</h5>,
      },
    ]}
  />
);

export default function WorkDetail(props) {
  let { maChiTietLoaiCongViec } = props.match.params;
  let { workDetail } = useSelector((rootReducer) => rootReducer.WorkReducer);
  let { listWorkOfComment } = useSelector(
    (rootReducer) => rootReducer.CommentReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailWorkAction(maChiTietLoaiCongViec));
    dispatch(getWorkOfCommentAction(maChiTietLoaiCongViec));
  }, []);

  const renderWorkDetail = () => {
    return workDetail.map((work, index) => {
      return (
        <Fragment key={index}>
          <div className="col-8">
            <div>
              <span>
                <a className="font-weight-bold" href="#">
                  {work.tenLoaiCongViec}
                </a>
                <svg
                  style={{
                    margin: "0 20px",
                  }}
                  width="5"
                  height="14"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                </svg>
                <a className="font-weight-bold" href="#">
                  {work.tenNhomChiTietLoai}
                </a>
                <svg
                  style={{
                    margin: "0 20px",
                  }}
                  width="5"
                  height="14"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                </svg>
                <a className="font-weight-bold" href="#">
                  {work.tenChiTietLoai}
                </a>
              </span>
              <h2 className="mt-3">{work.congViec.tenCongViec}</h2>
              <div className="d-flex align-items-center ">
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    width: "50px",
                    height: "50px",
                  }}
                  src={work.avatar}
                  alt=""
                />
                <span style={{ color: "#C0C0C0" }} className="ml-2">
                  {work.tenNguoiTao}
                </span>
                <div
                  style={{
                    color: "#b5b6ba",
                    fontWeight: "400",
                    marginLeft: "20px",
                  }}
                >
                  <Rate
                    style={{
                      borderLeft: "0.5px solid #b5b6ba",
                      borderRight: "0.5px solid #b5b6ba",
                      padding: "0 20px",
                    }}
                    allowHalf
                    defaultValue={work.congViec.saoCongViec}
                  />
                  <span className="ml-4">({work.congViec.danhGia})</span>
                </div>
              </div>
            </div>
            <div className="my-4">
              <img
                style={{
                  borderRadius: "5px",
                  width: "80%",
                }}
                className="img-fluid"
                src={work.congViec.hinhAnh}
                alt=""
              />
            </div>
            <div
              style={{
                fontSize: "20px",
              }}
              className="detailWork-content"
            >
              <h2>About This Gig</h2>
              <p
                style={{
                  color: "#FFA500",
                  fontWeight: "500",
                }}
              >
                Top Rated Seller width all posltive reviews
              </p>
              <div>
                {/* max 440 */}
                <h2>{work.congViec.moTa.slice(0, 10)}</h2>
                <p
                  style={{
                    color: "#FFA500",
                    fontWeight: "500",
                  }}
                >
                  Welcome to my gig. I know I can create a logo for you that
                  will make you smile.
                </p>
                <p>{work.congViec.moTa.slice(10, 100)}</p>
                <p>{work.congViec.moTa.slice(100, 218)}</p>
                <p
                  style={{
                    color: "#FFA500",
                    fontWeight: "700",
                  }}
                >
                  Why choose Me?
                </p>
                <ul
                  style={{
                    fontWeight: "700",
                    color: "#62646a",
                    padding: "0 20px",
                  }}
                >
                  <li>Years of experience working directly with clients</li>
                  <li>{work.congViec.moTa.slice(218, 340)}</li>
                  <li>{work.congViec.moTa.slice(340, 390)}</li>
                  <li>My service is totally different from other sellers.</li>
                </ul>
                <p
                  style={{
                    color: "#FFA500",
                    fontWeight: "700",
                  }}
                >
                  {work.congViec.moTa.slice(390, 440)}
                </p>
              </div>
            </div>
            <section className="the-seller">
              <h2>About the Seller</h2>
              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "50px",
                    width: "150px",
                    height: "200px",
                  }}
                  src={work.avatar}
                  alt=""
                />
                <div className="theSeller-info">
                  <div className="mb-4">
                    <h1>{work.tenNguoiTao}</h1>
                    <p
                      style={{ color: "#62646a" }}
                      className="font-weight-bold"
                    >
                      Web Developer
                    </p>
                    <Rate allowHalf defaultValue={work.congViec.saoCongViec} />
                    <span className="mx-3">({work.congViec.danhGia})</span>
                  </div>
                  <button className="btn btn-outline-secondary">
                    Contact me
                  </button>
                </div>
              </div>
            </section>
            <section className={`FAQ mt-5 ${styleDetailWork["FAQ"]}`}>
              <h1>FAQ</h1>
              <div className="d-flex justify-content-between">
                <p>Do you provide regular updates on order?</p>
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
              <div className="d-flex justify-content-between">
                <p>How do you guarantee product quallty and rellabllty?</p>
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
              <div className="d-flex justify-content-between">
                <p>Do you give post developer support?</p>
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
              <div className="d-flex justify-content-between">
                <p>Do you convert PSD to HTML?</p>
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
            </section>
            <section className="reviews mt-5 mb-4">
              <h2 style={{ position: "relative" }}>
                <div>
                  <span>355 Reviews</span>
                  <Rate className="mx-3" allowHalf defaultValue={5} />
                  <span
                    style={{
                      color: "#ffb33e",
                    }}
                  >
                    5.0
                  </span>
                </div>
                <div
                  className={`reviews_right ${styleDetailWork["reviews_right"]}`}
                >
                  <h6 className="mr-2">Sort By</h6>
                  <Dropdown overlay={menu}>
                    <Typography.Link>
                      <Space
                        style={{
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        <h2>Most recent</h2>
                        <DownOutlined />
                      </Space>
                    </Typography.Link>
                  </Dropdown>
                </div>
              </h2>
              <div
                className={`row reviews-startCouters ${styleDetailWork["reviews-startCouters"]}`}
              >
                <div className="col-6 p-0">
                  <div className={`${styleDetailWork["startCouters-content"]}`}>
                    <button className=" btn btn-outline-primary">
                      5 Starts
                    </button>
                    <Rate allowHalf defaultValue={5} />
                    <span>(333)</span>
                  </div>
                  <div className={`${styleDetailWork["startCouters-content"]}`}>
                    <button className="btn btn-outline-primary">
                      4 Starts
                    </button>
                    <Rate allowHalf defaultValue={4} />
                    <span>(2)</span>
                  </div>
                  <div className={`${styleDetailWork["startCouters-content"]}`}>
                    <button className="btn btn-outline-primary">
                      3 Starts
                    </button>
                    <Rate allowHalf defaultValue={0} />
                    <span>(0)</span>
                  </div>
                  <div className={`${styleDetailWork["startCouters-content"]}`}>
                    <button className="btn btn-outline-primary">
                      2 Starts
                    </button>
                    <Rate allowHalf defaultValue={0} />
                    <span>(0)</span>
                  </div>
                  <div className={`${styleDetailWork["startCouters-content"]}`}>
                    <button className="btn btn-outline-primary">1 Start</button>
                    <Rate allowHalf defaultValue={0} />
                    <span>(0)</span>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <h4>Rating Breakdown</h4>
                    <ul
                      className={`reviews-colRight ${styleDetailWork["reviews-colRight"]}`}
                    >
                      <li>
                        Seller communication level
                        <span>
                          <div className="d-flex align-baseline">
                            <span
                              style={{
                                width: 15,
                                height: 15,
                                marginRight: "10px",
                              }}
                              aria-hidden="true"
                            >
                              <svg
                                width={16}
                                height={15}
                                viewBox="0 0 16 15"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ fill: "#ffb33e" }}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                />
                              </svg>
                            </span>
                            <b
                              style={{
                                color: "#ffb33e",
                                fontSize: "17px",
                              }}
                            >
                              5
                            </b>
                          </div>
                        </span>
                      </li>
                      <li>
                        Recommend to a friend
                        <span>
                          <div className="d-flex align-baseline">
                            <span
                              style={{
                                width: 15,
                                height: 15,
                                marginRight: "10px",
                              }}
                              aria-hidden="true"
                            >
                              <svg
                                width={16}
                                height={15}
                                viewBox="0 0 16 15"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ fill: "#ffb33e" }}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                />
                              </svg>
                            </span>
                            <b
                              style={{
                                color: "#ffb33e",
                                fontSize: "17px",
                              }}
                            >
                              5
                            </b>
                          </div>
                        </span>
                      </li>
                      <li>
                        Service as described
                        <span>
                          <div className="d-flex align-baseline">
                            <span
                              style={{
                                width: 15,
                                height: 15,
                                marginRight: "10px",
                              }}
                              aria-hidden="true"
                            >
                              <svg
                                width={16}
                                height={15}
                                viewBox="0 0 16 15"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ fill: "#ffb33e" }}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                />
                              </svg>
                            </span>
                            <b
                              style={{
                                color: "#ffb33e",
                                fontSize: "17px",
                              }}
                            >
                              5
                            </b>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-5 ">
                <h3 className="mr-5">Fillter</h3>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#74767e",
                    fontWeight: "500",
                  }}
                  className="mr-4"
                >
                  Industry
                </span>
                <Dropdown overlay={menu}>
                  <Typography.Link>
                    <Space
                      style={{
                        color: "black",
                        fontSize: "15px",
                      }}
                    >
                      <h2>All Industrless</h2>
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </div>
            </section>
            <hr />
          </div>
          <div className="col-4">
            <Tabs
              centered="true"
              defaultActiveKey="2"
              onChange={onChange}
              items={[
                {
                  label: <h2>Basic</h2>,
                  key: "1",
                  children: `Updating....`,
                },
                {
                  label: <h2 className="mx-5">Standard</h2>,
                  key: "2",
                  children: (
                    <Fragment>
                      <div
                        style={{
                          padding: "20px 20px",
                          border: "0.5px solid #C0C0C0",
                        }}
                      >
                        <h4
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Standard
                          <span
                            style={{
                              color: "#026a5d",
                            }}
                          >
                            {" "}
                            {work.congViec.giaTien} $
                          </span>
                        </h4>
                        <p
                          style={{ color: "#C0C0C0", textAlign: "center" }}
                          className="mt-4"
                        >
                          Create a simple web application for your business
                        </p>
                        <div>
                          <div className="d-flex align-items-center">
                            <span
                              style={{
                                fontWeight: "400",
                              }}
                            >
                              {work.congViec.moTaNgan.slice(5, 27)}
                            </span>
                            <span
                              style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                marginLeft: "10px",
                                color: "#026a5d",
                              }}
                            >
                              {work.congViec.moTaNgan.slice(27, 45)}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: "20px",
                            }}
                          >
                            <b>{work.congViec.moTaNgan.slice(45, 77)}</b>
                            {work.congViec.moTaNgan.slice(77, 163)}.
                          </span>
                          <div className="mt-4">
                            <span className="mr-5">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                <path d="M9 4H7v5h5V7H9V4z"></path>
                              </svg>
                              <b
                                style={{
                                  color: "#808080",
                                }}
                                className="ml-2"
                              >
                                {work.congViec.moTaNgan.slice(165, 182)}.
                              </b>
                            </span>
                            <span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                              </svg>
                              <b
                                style={{
                                  color: "#808080",
                                }}
                                className="ml-2"
                              >
                                {work.congViec.moTaNgan.slice(183, 203)}.
                              </b>
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (localStorage.getItem(USER_LOGIN) !== null) {
                              let responsiveNav = document.querySelector(
                                ".navbar-responsive-right"
                              );
                              responsiveNav.classList.add(
                                `${styleDetailWork["navbar-responsive"]}`
                              );
                            } else {
                              history.push("/login");
                            }
                          }}
                          style={{
                            width: "100%",
                          }}
                          className="btn btn-success  mt-4"
                        >
                          <span style={{ fontWeight: "600" }}>
                            Continue (${work.congViec.giaTien})
                          </span>

                          <span
                            style={{
                              textAlign: "right",
                              float: "right",
                              fill: "white",
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                            </svg>
                          </span>
                        </button>
                        <div
                          style={{
                            position: "fixed",
                            color: "white",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            backgroundColor: "#F0E68C",
                            width: 500,
                            zIndex: "99",
                            transition: "all 0.5s",
                            transform: "translateX(100%)",
                          }}
                          className={`navbar-responsive-right`}
                        >
                          <section className="navbarResponsive-content">
                            <header>
                              <div
                                className={`my-3 p-4 d-flex justify-content-between align-items-center ${styleDetailWork["headerContent-navReponsive"]}`}
                              >
                                <h4>Order options</h4>
                                <button
                                  className="btn btn-info"
                                  onClick={() => {
                                    let responsiveNav = document.querySelector(
                                      ".navbar-responsive-right"
                                    );
                                    responsiveNav.classList.remove(
                                      `${styleDetailWork["navbar-responsive"]}`
                                    );
                                  }}
                                >
                                  <i className="fa-solid fa-xmark"></i>
                                </button>
                              </div>
                            </header>
                            <div
                              style={{
                                padding: "32px",
                              }}
                              className="content"
                            >
                              <div
                                className={`${styleDetailWork["content-singerOder"]}`}
                              >
                                <div
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    color: "#404145",
                                  }}
                                >
                                  Singer Oder
                                </div>
                                <span style={{ fontSize: "20px" }}>
                                  ${work.congViec.giaTien}
                                </span>
                              </div>
                              <div
                                style={{
                                  background: "#f5f5f5",
                                  color: "#404145",
                                  borderRadius: "8px",
                                  padding: "32px",
                                }}
                                className="mt-4"
                              >
                                <div className="d-flex flex-column">
                                  <span
                                    style={{
                                      fontSize: "32px",
                                      lineHeight: "120%",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ${work.congViec.giaTien}
                                  </span>
                                  <span>Singer Order</span>
                                  <hr />
                                  <div className="content-singerOder-icon mt-4 d-flex flex-column">
                                    <span>
                                      <svg
                                        width={18}
                                        height={16}
                                        viewBox="0 0 18 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.75 1C0.75 0.585786 1.08579 0.25 1.5 0.25H16.5C16.9142 0.25 17.25 0.585786 17.25 1V4C17.25 4.41421 16.9142 4.75 16.5 4.75H12.25V10C12.25 10.2883 12.0847 10.5511 11.8249 10.676C11.565 10.8009 11.2566 10.7658 11.0315 10.5857L9 8.96047L6.96852 10.5857C6.74339 10.7658 6.43496 10.8009 6.17511 10.676C5.91526 10.5511 5.75 10.2883 5.75 10V4.75H1.5C1.08579 4.75 0.75 4.41421 0.75 4V1ZM7.25 4.75V8.43953L8.53148 7.41435C8.80539 7.19522 9.19461 7.19522 9.46852 7.41435L10.75 8.43953V4.75H7.25ZM2.25 3.25V1.75H15.75V3.25H2.25ZM2.5 5.25C2.91421 5.25 3.25 5.58579 3.25 6V14.25H14.75V6C14.75 5.58579 15.0858 5.25 15.5 5.25C15.9142 5.25 16.25 5.58579 16.25 6V15C16.25 15.4142 15.9142 15.75 15.5 15.75H2.5C2.08579 15.75 1.75 15.4142 1.75 15V6C1.75 5.58579 2.08579 5.25 2.5 5.25Z"
                                        />
                                      </svg>

                                      <b
                                        style={{
                                          color: "#808080",
                                        }}
                                        className="ml-2"
                                      >
                                        Basic Package.
                                      </b>
                                    </span>
                                    <span className="my-4">
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                        <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                                      </svg>
                                      <b
                                        style={{
                                          color: "#808080",
                                        }}
                                        className="ml-2"
                                      >
                                        {work.congViec.moTaNgan.slice(183, 203)}
                                        .
                                      </b>
                                    </span>
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                        <path d="M9 4H7v5h5V7H9V4z"></path>
                                      </svg>
                                      <b
                                        style={{
                                          color: "#808080",
                                        }}
                                        className="ml-2"
                                      >
                                        {work.congViec.moTaNgan.slice(165, 182)}
                                        .
                                      </b>
                                    </span>
                                  </div>
                                  <hr />
                                  <button
                                    onClick={() => {
                                      dispatch(hireAJobAction());
                                    }}
                                    style={{
                                      width: "100%",
                                    }}
                                    className="btn btn-success  mt-4"
                                  >
                                    <span style={{ fontWeight: "600" }}>
                                      Continue (${work.congViec.giaTien})
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <button
                          style={{
                            color: "#1dbf73",
                            backgroundColor: "transparent",
                            paddingTop: "12px",
                            textAlign: "center",
                            border: "none",
                            width: "100%",
                          }}
                        >
                          Compare Packages
                        </button>
                        {/* max 203 */}
                      </div>
                      <div
                        className="mt-4"
                        style={{
                          padding: "24px",
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <button
                          style={{
                            width: "100%",
                          }}
                          className="btn btn-outline-secondary"
                        >
                          Contact Seller
                        </button>
                      </div>
                    </Fragment>
                  ),
                },
                {
                  label: <h2>Premium</h2>,
                  key: "3",
                  children: `Updating....`,
                },
              ]}
            />
          </div>
        </Fragment>
      );
    });
  };
  const renderWorkOfComment = () => {
    return listWorkOfComment.map((comment, index) => {
      if (comment.noiDung.trim() !== "") {
        return (
          <Fragment key={index}>
            <section className="comment">
              <div className=" d-flex align-items-center my-3">
                <div>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={comment.avatar}
                    alt=""
                  />
                </div>
                <span className="ml-3">
                  <div className="d-flex align-baseline">
                    <h2 className="mr-3">{comment.tenNguoiBinhLuan}</h2>
                    <span
                      style={{
                        width: 15,
                        height: 15,
                        marginRight: "5px",
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: "#ffb33e" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        />
                      </svg>
                    </span>
                    <b
                      style={{
                        color: "#ffb33e",
                        fontSize: "17px",
                      }}
                    >
                      5
                    </b>
                  </div>
                </span>
              </div>
              <div className="comment-content" style={{ marginLeft: "64px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(64, 65, 69)",
                  }}
                >
                  {comment.noiDung}
                </p>
                <p
                  style={{
                    color: "#74767e",
                  }}
                >
                  Published {comment.ngayBinhLuan}
                </p>
                <img
                  style={{ width: "70px", height: "70px" }}
                  src="https://picsum.photos/200/300"
                  alt=""
                />
                <div className="comment-footer mt-3 d-flex">
                  <div
                    className={`commentFooter-Help ${styleDetailWork["commentFooter-Help"]}`}
                  >
                    Helpful?
                  </div>
                  <span>
                    <span
                      className={`commentFooter-icon d-flex ${styleDetailWork["commentFooter-icon"]}`}
                    >
                      <span className="mr-3">
                        <div>
                          <span
                            style={{ width: 14, height: 14 }}
                            aria-hidden="true"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z" />
                            </svg>
                          </span>
                          <span className="ml-2">Yes</span>
                        </div>
                      </span>
                      <div>
                        <span
                          style={{ width: 14, height: 14 }}
                          aria-hidden="true"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z" />
                          </svg>
                        </span>
                        <span className="ml-2">No</span>
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </section>
            <hr />
          </Fragment>
        );
      }
    });
  };
  return (
    <div
      style={{
        paddingLeft: "32px",
        paddingRight: "32px",
        maxWidth: "1304px",
      }}
      className="container"
    >
      <section className="row my-5 ">{renderWorkDetail()}</section>
      <section className="row my-5 workOf-comment">
        <div className="col-8">
          {renderWorkOfComment()}
          <div className="addComment p-3">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Commit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
