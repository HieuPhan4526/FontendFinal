import axios from "axios";
import { DOMAIN } from "../../../ReactFinal/src/ultil/setting";
import { TOKEN_CYBER } from "../utils/setting";


export class baseServices {
    constructor() { }
    get = (url, id) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}${url}`,
            header: {
                "tokenCybersoft": TOKEN_CYBER
            },
            path: {
                "id": id
            }
        });
    };
}