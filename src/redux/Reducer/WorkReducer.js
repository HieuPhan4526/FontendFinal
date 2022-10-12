import { SET_LIST_WORK } from "../Types/WorkType";

const stateDefault = {
    listWork: [
        {
            "id": 1,
            "tenCongViec": "I will design an outstanding logo",
            "danhGia": 100,
            "giaTien": 15,
            "nguoiTao": 1,
            "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/cv1.jpg",
            "moTa": "\nHi There,\r\n\r\n\r\n\r\nHave You Been Looking for a Brand Logo with Complete Corporate Brand Identity?\r\n\r\n\r\n\r\nHi, I am Talha, a Passionate Professional Graphic Designer designing brand logos & brand Identity for many Years, I have successfully designed brand logos with the complete corporate brand identity for different brands around the world.\r\n\r\n\r\n\r\nI also would love to do demanded designs, Just leave your request, I will respond instantly.",
            "maChiTietLoaiCongViec": 2,
            "moTaNgan": "Plus - MOST SELLING!\r\nUS$65\r\n3 logo options + source file in Ai, EPS, SVG, PDF, and PSD\r\n\r\n2 Days Delivery\r\n5 Revisions\r\n3 concepts included\r\nLogo transparency\r\nVector file\r\nPrintable file\r\nSource file",
            "saoCongViec": 1
        },
    ]
};

export const WorkReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LIST_WORK: {
            state.listWork = action.listWork;
            return { ...state };
        }


        default: {
            return { ...state };

        }
    }
};