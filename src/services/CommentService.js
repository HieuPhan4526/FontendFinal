import { baseServices } from "./baseServices";

export class CommentService extends baseServices {
    constructor() {
        super();
    }
    getWorkOfCommentService = (maCongViec) => {
        return this.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`);
    };
}

export const commentService = new CommentService();