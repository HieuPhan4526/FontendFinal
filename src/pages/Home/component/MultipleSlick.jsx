import React from "react";
import Slider from "react-slick";
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
    <div>
      <Slider {...settings}>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Build your brand</span>
            <h3 className="text-light">Logo Design</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Customize your site</span>
            <h3 className="text-light">WordPress</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Share your message</span>
            <h3 className="text-light">Voice Over</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Engage your audience</span>
            <h3 className="text-light">Video Explainer</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Reach more customers</span>
            <h3 className="text-light">Social Media</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Unlock growth online</span>
            <h3 className="text-light">SEO</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Color your dreams</span>
            <h3 className="text-light">Illustration</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Go global</span>
            <h3 className="text-light">Translation</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Learn your business</span>
            <h3 className="text-light">Data Entry</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
            alt=""
          />
        </div>
        <div>
          <div style={{ position: "absolute" }} className="p-2 text-light">
            <span>Showcase your story</span>
            <h3 className="text-light">Book Covers</h3>
          </div>
          <img
            width={200}
            height={300}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
