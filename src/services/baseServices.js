import axios from "axios";
import { WORK_NAME } from "../redux/Types/WorkType";
import { DOMAIN } from "../utils/setting";
import { TOKEN_CYBER } from "../utils/setting";


export class baseServices {
    constructor() { }
    get = (url) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}${url}`,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
                'TenCongViec': localStorage.getItem(WORK_NAME),
            },
        });
    };
    post = (url,data) =>{
        return axios({
            method:"POST",
            url:`${DOMAIN}${url}`,
            data: data,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
            },
        })
    }
}