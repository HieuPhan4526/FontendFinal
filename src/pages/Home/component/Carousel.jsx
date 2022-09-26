import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../assets/css/styleSwiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049977/bg-hero-5-1792-x2.png"
            alt=""
          />
          <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              textAlign: "start",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h3 className="text-light" style={{ fontSize: "45px" }}>
                Find the perfect
                <i> freelance </i>
                services for your business
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'building mobile app'"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <span className="text-light">Popular: </span>
                <ul
                  className="p-0"
                  style={{ listStyle: "none", display: "flex" }}
                >
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Website Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">WordPress</button>
                  </li>
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Logo Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      Video Editing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049984/bg-hero-1-1792-x2.png"
            alt=""
          />
          <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              textAlign: "start",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h3 className="text-light" style={{ fontSize: "45px" }}>
                Find the perfect
                <i> freelance </i>
                services for your business
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'building mobile app'"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <span className="text-light">Popular: </span>
                <ul
                  className="p-0"
                  style={{ listStyle: "none", display: "flex" }}
                >
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Website Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">WordPress</button>
                  </li>
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Logo Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      Video Editing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203021/bg-hero-2-1792-x2.png"
            alt=""
          />
          <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              textAlign: "start",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h3 className="text-light" style={{ fontSize: "45px" }}>
                Find the perfect
                <i> freelance </i>
                services for your business
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'building mobile app'"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <span className="text-light">Popular: </span>
                <ul
                  className="p-0"
                  style={{ listStyle: "none", display: "flex" }}
                >
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Website Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">WordPress</button>
                  </li>
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Logo Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      Video Editing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783974/bg-hero-3-1792-x2.png"
            alt=""
          />
          <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              textAlign: "start",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h3 className="text-light" style={{ fontSize: "45px" }}>
                Find the perfect
                <i> freelance </i>
                services for your business
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'building mobile app'"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <span className="text-light">Popular: </span>
                <ul
                  className="p-0"
                  style={{ listStyle: "none", display: "flex" }}
                >
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Website Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">WordPress</button>
                  </li>
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Logo Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      Video Editing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734106/bg-hero-4-1792-x2.png"
            alt=""
          />
          <div
            className="container"
            style={{
              position: "absolute",
              display: "flex",
              textAlign: "start",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h3 className="text-light" style={{ fontSize: "45px" }}>
                Find the perfect
                <i> freelance </i>
                services for your business
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'building mobile app'"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex mt-3">
                <span className="text-light">Popular: </span>
                <ul
                  className="p-0"
                  style={{ listStyle: "none", display: "flex" }}
                >
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Website Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">WordPress</button>
                  </li>
                  <li className="mx-2">
                    <button className="btn btn-outline-light">
                      Logo Design
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-outline-light">
                      Video Editing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
