import { baseServices } from "./baseServices";
export class WorkService extends baseServices {

    GetCategoriesWorkDetail = (id) => {
        return this.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
    };
    addWork = (data) => {
        return this.post(`/api/cong-viec`, data);
    };
    updateWork = (id, data) => {
        return this.put(`/api/cong-viec/${id}`, data);
    };
    deleteWork = (id) => {
        return this.delete(`/api/cong-viec/${id}`);
    };
    searchWorkName = (name) => {
        return this.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`);
    };
    getDetailType = () => {
        return this.get(`/api/loai-cong-viec`);
    };
    addDetailType = (data) => {
        return this.post(`/api/loai-cong-viec`, data);
    };
    updateDetailType = (id, data) => {
        return this.put(`/api/loai-cong-viec/${id}`, data);
    };
    deleteDetailType = (id) => {
        return this.delete(`/api/loai-cong-viec/${id}`);
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
    getDetailWorkService = (maCongViec) => {
        return this.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`);
    };
    hireAJobService = (data) => {
        return this.post(`/api/thue-cong-viec`, data);
    };
    getRentalList = () => {
        return this.get(`/api/thue-cong-viec/lay-danh-sach-da-thue`);
    };
}

export const administrativeJob = new AdministrativeJob();
