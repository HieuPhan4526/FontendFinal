import axios from "axios";
import { useSelector } from "react-redux";
import { MA_CHI_TIET_LOAI, WORK_NAME } from "../redux/Types/WorkType";
import { DOMAIN, TOKEN, USER_LOGIN } from "../utils/setting";
import { TOKEN_CYBER } from "../utils/setting";



export class baseServices {
    constructor() { }
    get = (url) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}${url}`,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
            },
        });
    };
    post = (url, data) => {
        return axios({
            method: "POST",
            url: `${DOMAIN}${url}`,
            data: data,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
                "token": localStorage.getItem(TOKEN)
            },
        });
    };
    put = (url, data) => {
        return axios({
            method: "PUT",
            url: `${DOMAIN}${url}`,
            data: data,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
                "token": localStorage.getItem(TOKEN)
            },
        });
    }
    delete = (url) => {
        return axios({
            method: "DELETE",
            url: `${DOMAIN}${url}`,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
                "token": localStorage.getItem(TOKEN)
            },
        });
    }
}