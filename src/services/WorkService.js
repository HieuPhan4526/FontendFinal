import { baseServices } from "./baseServices";

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
}

export const administrativeJob = new AdministrativeJob();