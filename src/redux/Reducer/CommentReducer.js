import { SET_WORK_OF_COMMENT } from "../Types/CommentTypes";

const stateDefault = {
    listWorkOfComment: []
};

export const CommentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_WORK_OF_COMMENT: {
            state.listWorkOfComment = action.listWorkOfComment;
            return { ...state };
        }

        default: {
            return { ...state };

        }
    }
};
