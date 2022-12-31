import { commentService } from "../../services/CommentService";
import { SET_WORK_OF_COMMENT } from "../Types/CommentTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../Types/LoaddingType";



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
            alert(result.data.message);
        } catch (error) {
            console.log(error);
        }
    };
};