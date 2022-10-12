import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { Modal } from "antd";

export default function SimpleSlick(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  //Open and Close modal1

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Open and Close modal2
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  //Open and Close modal3
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  //Open and Close modal4
  const showModal4 = () => {
    setIsModalOpen4(true);
  };
  const handleOk4 = () => {
    setIsModalOpen4(false);
  };

  const handleCancel4 = () => {
    setIsModalOpen4(false);
  };

  return (
    <div className="container" style={{ padding: "100px 0" }}>
      <Slider {...settings}>
        <Fragment>
          <div className="row">
            <div className="col-md-12 col-xl-5">
              <div style={{ position: "relative" }}>
                <div className="iconPlay">
                  <img
                    onClick={() => {
                      showModal();
                    }}
                    className="video"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                    alt=""
                  />
                  <Modal
                    open={isModalOpen}
                    footer={null}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={800}
                    bodyStyle={{ padding: "0" }}
                  >
                    <div>
                      <video
                        style={{
                          borderRadius: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        controls={true}
                      >
                        <source
                          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7">
              <h5 className="textContentSimple">
                Kay Kim, Co-Founder
                <span className="logo_simple">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <i className="text_italics">
                "It's extremely exciting that Fiverr has freelancers from all
                over the world — it broadens the talent pool. One of the best
                things about Fiverr is that while we're sleeping, someone's
                working."
              </i>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="row">
            <div className="col-md-12 col-xl-5">
              <div style={{ position: "relative" }}>
                <div className="iconPlay">
                  <img
                    onClick={() => {
                      showModal2();
                    }}
                    className="video"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                    alt=""
                  />
                  <Modal
                    open={isModalOpen2}
                    footer={null}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
                    width={800}
                    bodyStyle={{ padding: "0" }}
                  >
                    <div>
                      <video
                        style={{
                          borderRadius: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        controls={true}
                      >
                        <source
                          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7">
              <h5 className="textContentSimple">
                Tim and Dan Joo, Co-Founders
                <span className="logo_simple">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <i className="text_italics">
                "When you want to create a business bigger than yourself, you
                need a lot of help. That's what Fiverr does."
              </i>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="row">
            <div className="col-md-12 col-xl-5">
              <div style={{ position: "relative" }}>
                <div className="iconPlay">
                  <img
                    onClick={() => {
                      showModal3();
                    }}
                    className="video"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                    alt=""
                  />
                  <Modal
                    open={isModalOpen3}
                    footer={null}
                    onOk={handleOk3}
                    onCancel={handleCancel3}
                    width={800}
                    bodyStyle={{ padding: "0" }}
                  >
                    <div>
                      <video
                        style={{
                          borderRadius: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        controls={true}
                      >
                        <source
                          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7">
              <h5 className="textContentSimple">
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span className="logo_simple">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <i className="text_italics">
                "We used Fiverr for SEO, our logo, website, copy, animated
                videos — literally everything. It was like working with a human
                right next to you versus being across the world."
              </i>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="row">
            <div className="col-md-12 col-xl-5">
              <div style={{ position: "relative" }}>
                <div className="iconPlay">
                  <img
                    onClick={() => {
                      showModal4();
                    }}
                    className="video"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                    alt=""
                  />
                  <Modal
                    open={isModalOpen4}
                    footer={null}
                    onOk={handleOk4}
                    onCancel={handleCancel4}
                    width={800}
                    bodyStyle={{ padding: "0" }}
                  >
                    <div>
                      <video
                        style={{
                          borderRadius: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        controls={true}
                      >
                        <source
                          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7">
              <h5 className="textContentSimple">
                Caitlin Tormey, Chief Commercial Officer
                <span className="logo_simple">
                  <img
                    alt="Company logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    loading="lazy"
                  />
                </span>
              </h5>
              <i className="text_italics">
                "We've used Fiverr for Shopify web development, graphic design,
                and backend web development. Working with Fiverr makes my job a
                little easier every day."
              </i>
            </div>
          </div>
        </Fragment>
      </Slider>
    </div>
  );
}
