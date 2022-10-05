import { baseServices } from "./baseServices";

export class AdministrativeJob extends baseServices {
    constructor() {
        super();
    }
    getListWork = () => {
        return this.get(`/api/cong-viec`);
    };
}

export const administrativeJob = new AdministrativeJob();