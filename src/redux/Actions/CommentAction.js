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