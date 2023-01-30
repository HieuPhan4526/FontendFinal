import React, { useEffect } from "react";
import "./BannerButton.css";
import { PlayCircleFilled } from "@ant-design/icons";
export default function BannerButton(props) {
  const hoverColor = [
    { id: 1, color: "#0b3a23" },
    { id: 2, color: "#be5272" },
    { id: 3, color: "#254200" },
    { id: 4, color: "#4d1727" },
    { id: 5, color: "#4d1727" },
    { id: 6, color: "#2f0d05" },
    { id: 7, color: "#687201" },
    { id: 8, color: "#8f2a00" },
    { id: 9, color: "#8f2a00" },
  ];
  return hoverColor.map((list, index) => {
    if (list.id === props.id) {
      return (
        <div key={index}>
          <button
            id="button"
            onMouseOver={() => {
              document.getElementById("button").style.color = list.color;
            }}
            onMouseOut={(a) => {
              document.getElementById("button").style.color = "";
            }}
            className="btn btn-outline-light banner-button"
            onClick={() => {
              document.getElementById("cate-video").style.display = "block";
              document.getElementById("video").play();
            }}
          >
            <span className="button-content">
              <PlayCircleFilled />
              <span className="pl-2">How Fiverr Works</span>
            </span>
          </button>
        </div>
      );
    }
  });
}
