import { commentService } from "../../services/CommentService";
import { SET_WORK_OF_COMMENT } from "../Types/CommentTypes";



export const getWorkOfCommentAction = (maCongViec) => {
    return async dispatch => {
        try {
            let result = await commentService.getWorkOfCommentService(maCongViec);
            dispatch({
                type: SET_WORK_OF_COMMENT,
                listWorkOfComment: result.data.content,
            });

        } catch (error) {
            console.log(error);
        }

    };
};
export const addCommentAction = (data) => {
    return async dispatch => {
        try {
            let result = await commentService.addCommentService(data);
            console.log(result);
            alert(result.data.message);

        } catch (error) {
            console.log(error);
        }

    };
};