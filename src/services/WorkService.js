import { baseServices } from "./baseServices";
export class WorkService extends baseServices {
    GetCategoriesWorkDetail = (id) => {
        return this.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
    };
}
export const workService = new WorkService();
export class AdministrativeJob extends baseServices {
    constructor() {
        super();
    }
    getListWorkService = () => {
        return this.get(`/api/cong-viec`);
    };
    getWorkByNameService = (tenCongViec) => {
        return this.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`);
    };
    getMenuTypeWork = () => {
        return this.get(`/api/cong-viec/lay-menu-loai-cong-viec`);
    };
}

export const administrativeJob = new AdministrativeJob();
