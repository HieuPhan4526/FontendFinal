import React, { Fragment, useRef, useState } from "react";

import Carousel from "./component/Carousel";
import MultipleSlick from "./component/MultipleSlick";
import "../../assets/css/styleHome.css";
import SimpleSlick from "./component/SimpleSlick";
import { Button, Modal } from "antd";

export default function Home() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal = () => {
    setIsModalOpen1(true);
  };

  const handleOk = () => {
    setIsModalOpen1(false);
  };

  const handleCancel = () => {
    setIsModalOpen1(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Carousel />
      <div className="container">
        <h1>Popular profesional services</h1>
        <div className="my-5">
          <MultipleSlick />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f1fdf7",
          marginBottom: "96px",
          padding: "96px 50px",
        }}
      >
        <div>
          <div className="row">
            <div className="col-md-12 col-xl-6" style={{ paddingRight: "11%" }}>
              <h2>A whole world of freelance talent at your fingertips</h2>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h4>
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    The best for every budget
                  </h4>
                  <p className="text-body">
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li>
                  <h4>
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Protected payments, every time
                  </h4>
                  <p className="text-body">
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li>
                  <h4>
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    24/7 support
                  </h4>
                  <p className="text-body">
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-xl-6">
              <div
                onClick={() => {
                  showModal();
                }}
                className="iconPlay"
              >
                <img
                  className="video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                  alt=""
                />
              </div>
              <Modal
                open={isModalOpen1}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={800}
                bodyStyle={{ padding: "0" }}
              >
                <video
                  className="video"
                  controls={true}
                  style={{ borderRadius: "0" }}
                  preload="metadata"
                >
                  <source
                    src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                    type="video/mp4"
                  />
                </video>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <SimpleSlick />
      <div className="Explore section">
        <h2 className="mb-5">Explore the marketplace</h2>
        <ul className="Explore-list d-flex">
          <li>
            <a href="/categories/graphics-design?source=hplo_cat_sec&pos=1">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics & Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li>
            <a href="/categories/online-marketing?source=hplo_cat_sec&pos=2">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
                loading="lazy"
              />
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="/categories/writing-translation?source=hplo_cat_sec&pos=3">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing & Translation"
                loading="lazy"
              />
              Writing &amp; Translation
            </a>
          </li>
          <li>
            <a href="/categories/video-animation?source=hplo_cat_sec&pos=4">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video & Animation"
                loading="lazy"
              />
              Video &amp; Animation
            </a>
          </li>
          <li>
            <a href="/categories/music-audio?source=hplo_cat_sec&pos=5">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music & Audio"
                loading="lazy"
              />
              Music &amp; Audio
            </a>
          </li>
          <li>
            <a href="/categories/programming-tech?source=hplo_cat_sec&pos=6">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming & Tech"
                loading="lazy"
              />
              Programming &amp; Tech
            </a>
          </li>
          <li>
            <a href="/categories/business?source=hplo_cat_sec&pos=7">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
                loading="lazy"
              />
              Business
            </a>
          </li>
          <li>
            <a href="/categories/lifestyle?source=hplo_cat_sec&pos=8">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
                loading="lazy"
              />
              Lifestyle
            </a>
          </li>
          <li>
            <a href="/categories/data?source=hplo_cat_sec&pos=9">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
                loading="lazy"
              />
              Data
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
