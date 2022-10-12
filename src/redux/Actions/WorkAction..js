import { administrativeJob } from "../../services/WorkService";
import { SET_LIST_WORK, SET_WORK_BY_NAME } from "../Types/WorkType";

export const getListWorkAction = () => {
    return async dispatch => {
        try {
            let result = await administrativeJob.getListWorkService();
            dispatch({
                type: SET_LIST_WORK,
                listWork: result.data.content
            });
        } catch (error) {
            console.log(error);
        }

    };
};
export const getWorkByNameAction = (tenCongViec) => {
    return async dispatch => {
        try {
            let result = await administrativeJob.getWorkByNameService(tenCongViec);
            dispatch({
                type: SET_WORK_BY_NAME,
                tenCongViec: result.data.content
            });
        } catch (error) {
            console.log(error);
        }

    };
};