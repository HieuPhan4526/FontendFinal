import { administrativeJob } from "../../services/WorkService";
import { SET_LIST_WORK } from "../Types/WorkType";

export const getListWorkAction = () => {
    return async dispatch => {
        try {
            let result = await administrativeJob.getListWork();
            dispatch({
                type: SET_LIST_WORK,
                listWork: result.data.content
            });
        } catch (error) {
            console.log(error);
        }

    };
};