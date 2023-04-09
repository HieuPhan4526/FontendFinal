import React, { Fragment, useEffect, useRef, useState } from "react";

import Carousel from "./component/Carousel";
import MultipleSlick from "./component/MultipleSlick";
import "../../assets/css/styleHome.css";
import SimpleSlick from "./component/SimpleSlick";
import { Button, Modal } from "antd";
import HomeHeader from "./component/HomeHeader";
import { useDispatch } from "react-redux";
import { HIDE_LOADING, SHOW_LOADING } from "../../redux/Types/LoaddingType";
import Loadding from "../../components/Loadding/Loadding";

export default function Home(props) {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SHOW_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_LOADING,
      });
    }, 2000);
  }, []);
  const showModal = () => {
    setIsModalOpen1(true);
  };

  const handleOk = () => {
    setIsModalOpen1(false);
  };

  const handleCancel = () => {
    setIsModalOpen1(false);
  };
  const maxWith = {
    margin: "0 auto",
    maxWidth: "1400px",
    padding: "32px 32px 64px",
    paddingTop: "0",
    paddingBottom: "0",
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="test-branch">Hello Word</div>
      <div className="test-branch">Hello Word</div>
      <div className="test-branch">Hello Word</div>

      <HomeHeader />
      <Carousel />
      <div className="Popular-profesional">
        <h1 className="Popular-profesional-title">
          Popular profesional services
        </h1>
        <div className="my-5">
          <MultipleSlick />
        </div>
      </div>
      <div
        className="a_whole_world"
        style={{
          backgroundColor: "#f1fdf7",
          marginBottom: "96px",
          padding: "96px 50px",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="aWholeWorld-contentleft col-md-12 col-xl-6"
              style={{ paddingRight: "11%" }}
            >
              <h2>A whole world of freelance talent at your fingertips</h2>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h4 className="aWholeWorld-contentleft">
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    The best for every budget
                  </h4>
                  <p className="aWholeWorld-contentleft-text">
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li>
                  <h4 className="aWholeWorld-contentleft">
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Protected payments, every time
                  </h4>
                  <p className="aWholeWorld-contentleft-text">
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li>
                  <h4 className="aWholeWorld-contentleft">
                    <span className="mr-2" style={{ color: "#62646a" }}>
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    24/7 support
                  </h4>
                  <p className="aWholeWorld-contentleft-text">
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-xl-6">
              <div onClick={showModal} className="freelance-talent-content">
                <img
                  className="video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                  alt=""
                />
                <div className="freelance-talent-overlay">
                  <img
                    className="freelance-talent-icon"
                    src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-play-icon-png-image_924817.jpg"
                    alt=""
                  />
                </div>
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
        <h2 className="mb-5 text-center">Explore the marketplace</h2>
        <ul className="Explore-list">
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
      <Loadding />
    </div>
  );
}
