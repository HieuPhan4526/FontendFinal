import React, { useEffect, useState } from "react";
import "./CategoriesDetail.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { workService } from "../../../../services/WorkService";
export default function CategoriesDetail(props) {
  let [state, setState] = useState([]);
  const RenderCateItem = () => {
    return state.map((group, index) => {
      return (
        <div className="cate-item" key={index}>
          <div
            className="cate-img"
            style={{
              background: `url('${group.hinhAnh}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h3 className="cate-title">{group.tenNhom}</h3>
          <div className="cate-options">
            {group.dsChiTietLoai.map((kind, index) => {
              return (
                <div className="option-item" key={index}>
                  <span className="text">{kind.tenChiTiet}</span>
                  <span className="cate-options-icon">
                    <ArrowRightOutlined />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    const getData = () => {
      workService
        .GetCategoriesWorkDetail(props.id)
        .then((result) => {
          setState(result.data.content[0].dsNhomChiTietLoai);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <div className="cate-content py-3">
        {state === [] ? "" : RenderCateItem()}
      </div>
    </div>
  );
}
