import axios from "axios";
import { DOMAIN, TOKEN_CYBER } from "../utils/setting";

export class baseServices {
    constructor() { }
    get = (url, id) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}${url}`,
            headers: {
                "tokenCybersoft": TOKEN_CYBER,
            },
            path: {
                "id": id
            }
        });
    };
}