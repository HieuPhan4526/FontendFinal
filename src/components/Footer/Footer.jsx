import React, { Fragment } from "react";
import styleFooter from "./footerCss.module.css";
export default function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="reponsive_footer">
          <ul
            style={{
              listStyle: "none",
              color: "rgba(0,0,0,0.4)",
              lineHeight: "40px",
            }}
          >
            <h4>Categorles</h4>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Programming & Tech</li>
            <li>Data</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>SiteMap</li>
          </ul>
        </div>
        <div className="reponsive_footer">
          <ul
            style={{
              listStyle: "none",
              color: "rgba(0,0,0,0.4)",
              lineHeight: "40px",
            }}
          >
            <h4>About</h4>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellectual Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="reponsive_footer">
          <ul
            style={{
              listStyle: "none",
              color: "rgba(0,0,0,0.4)",
              lineHeight: "40px",
            }}
          >
            <h4>Support</h4>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>
        <div className="reponsive_footer">
          <ul
            style={{
              listStyle: "none",
              color: "rgba(0,0,0,0.4)",
              lineHeight: "40px",
            }}
          >
            <h4>Community</h4>
            <li>Events</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Community Standards</li>
            <li>PodCast</li>
            <li>Affiliates</li>
            <li>Invite a Friend</li>
            <li>Become a Seller</li>
            <li>
              Fiverr Elevate
              <p style={{ color: "rgba(0,0,0,0.2)", lineHeight: "2px" }}>
                Exclusive Benefits
              </p>
            </li>
          </ul>
        </div>
        <div className="reponsive_footer">
          <ul
            style={{
              listStyle: "none",
              color: "rgba(0,0,0,0.4)",
              lineHeight: "40px",
            }}
          >
            <h4>More From Fiverr</h4>
            <li>Fiverr Business</li>
            <li>Fiverr Pro</li>
            <li>Fiverr Studios</li>
            <li>Fiverr Logo Maker</li>
            <li>Fiverr Guides</li>
            <li>Get Inspired</li>
            <li>
              ClearVoice
              <p style={{ color: "rgba(0,0,0,0.2)", lineHeight: "2px" }}>
                Content Marketing
              </p>
            </li>
            <li>
              AND CO
              <p style={{ color: "rgba(0,0,0,0.2)", lineHeight: "2px" }}>
                Invoice Software
              </p>
            </li>
            <li>
              Learn
              <p style={{ color: "rgba(0,0,0,0.2)", lineHeight: "2px" }}>
                Online Courses
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footerContact">
        <div className="row">
          <div className="footerContact-left col-12 col-lg-6">
            <div className="footerContact-leftContent">
              <h3 className="m-0">
                fiverr
                <span style={{ fontSize: "15px" }}> &#174;</span>
              </h3>
              <span
                className="footerContact-leftText ml-5"
                style={{ color: "rgba(0,0,0,0.4)" }}
              >
                &#169; Fiverr International Ltd. 2021
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={`${styleFooter["footer-icon"]}`}>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <div>
                <a href="#">
                  <i className="fa-solid fa-earth-asia"></i>
                </a>
                <span className="ml-1">English</span>
              </div>

              <span>$USD</span>
              <i className="fa-solid fa-universal-access"></i>
            </div>
          </div>
        </div>
        <div className="footer-content row text-center">
          <div className="col-sm-12 col-md-6">
            <h5>Website Build by Team:</h5>
            <ul>
              <li>
                <a target={`_blank`} href="https://github.com/BinFlex97">
                  Đinh Quang Khánh
                </a>{" "}
              </li>
              <li>
                <a target={`_blank`} href="https://github.com/HieuPhan4526">
                  Phan Minh Hiếu
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5>Link source github :</h5>
            <a
              target={`_blank`}
              href="https://github.com/HieuPhan4526/FontendFinal/tree/main"
            >
              https://github.com/HieuPhan4526/FontendFinal/tree/main
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
