import React from "react";
import Carousel from "./component/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div style={{ backgroundColor: "#fafafa", marginBottom: "96px" }}>
        <div className="p-5">
          <span>Trusted by: </span>
        </div>
      </div>
    </div>
  );
}
