import {baseServices} from "./baseServices"
export class WorkService extends baseServices {
    GetCategoriesWorkDetail = (id) => {
        return this.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
    }
}
export const workService = new WorkService();
export class AdministrativeJob extends baseServices {
    constructor() {
        super();
    }
    getListWork = () => {
        return this.get(`/api/cong-viec`);
    };
}

export const administrativeJob = new AdministrativeJob();
