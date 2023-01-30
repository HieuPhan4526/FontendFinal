import React from "react";
import Slider from "react-slick";
import { history } from "../../../App";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function MultipleSlick() {
  return (
    <div className="multipleSlick">
      <Slider {...settings}>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Build your brand</span>
            <h4 className="text-light">Logo Design</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Customize your site</span>
            <h4 className="text-light">WordPress</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Share your message</span>
            <h4 className="text-light">Voice Over</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Engage your audience</span>
            <h4 className="text-light">Video Explainer</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Reach more customers</span>
            <h4 className="text-light">Social Media</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Unlock growth online</span>
            <h4 className="text-light">SEO</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Color your dreams</span>
            <h4 className="text-light">Illustration</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Go global</span>
            <h4 className="text-light">Translation</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Learn your business</span>
            <h4 className="text-light">Data Entry</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
        <div className="multipleSlick-content">
          <img
            className="multipleSlick-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
            alt=""
          />
          <div className="multipleSlick-text">
            <span className="text-light">Showcase your story</span>
            <h4 className="text-light">Book Covers</h4>
          </div>
          <div className="multipleSlick-overlay"></div>
        </div>
      </Slider>
    </div>
  );
}
