import React from "react";
import styleWorkDetail from "../../assets/css/styleWorkDetail.module.css";

export default function WorkDetail(props) {
  console.log(props);
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
            Results for "HTML"
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className={`${styleWorkDetail["floating-top-bar"]}`}>
            <div className={`${styleWorkDetail["top-filters"]}`}>
              <div>
                <button>
                  Category
                  <span style={{ width: 10, height: 10 }}>
                    <svg
                      width={11}
                      height={7}
                      viewBox="0 0 11 7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <div>
                  Service Options
                  <span style={{ width: 10, height: 10 }}>
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
                <div>
                  Seller Details
                  <span style={{ width: 10, height: 10 }}>
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
                <div>
                  Budget
                  <span style={{ width: 10, height: 10 }}>
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
                <div>
                  Delivery Time
                  <span style={{ width: 10, height: 10 }}>
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
                <li>
                  <span>Pro services</span>
                </li>
                <li>
                  <span>Pro services</span>
                </li>
                <li>
                  <span>Pro services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
