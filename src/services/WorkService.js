import {baseServices} from "./baseServices"
export class WorkService extends baseServices {
    GetCategoriesWorkDetail = () => {
        return this.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/1`)
    }
}
export const workService = new WorkService();