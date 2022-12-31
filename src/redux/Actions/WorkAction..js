import { administrativeJob } from "../../services/WorkService";
import { SET_HIRE_JOB, SET_LIST_WORK, SET_MENU_TYPE_WORK, SET_WORK_BY_NAME, SET_WORK_DETAIL } from "../Types/WorkType";

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
            if (tenCongViec !== "") {
                let result = await administrativeJob.getWorkByNameService(tenCongViec);
                dispatch({
                    type: SET_WORK_BY_NAME,
                    tenCongViec: result.data.content
                });
            }
        } catch (error) {
            console.log(error);
        }

    };
};
export const getMenuTypeWork = () => {
    return async dispatch => {
        try {
            let result = await administrativeJob.getMenuTypeWork();
            dispatch({
                type: SET_MENU_TYPE_WORK,
                listMenuTypeWork: result.data.content
            });
        } catch (error) {
            console.log(error);
        }

    };
};
export const getDetailWorkAction = (maCongViec) => {
    return async dispatch => {
        try {
            let result = await administrativeJob.getDetailWorkService(maCongViec);
            dispatch({
                type: SET_WORK_DETAIL,
                workDetail: result.data.content
            });
        } catch (error) {
            console.log(error);
        }

    };
};
export const hireAJobAction = (data) => {
    return async dispatch => {
        try {
            let result = await administrativeJob.hireAJobService(data);
        } catch (error) {
            console.log(error);
        }

    };
};