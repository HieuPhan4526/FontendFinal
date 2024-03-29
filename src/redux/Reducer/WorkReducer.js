import { HIRED_WORK, SET_CATEGORIES_WORK, SET_HIRE_JOB, SET_LIST_WORK, SET_MENU_TYPE_WORK, SET_WORK_BY_NAME, SET_WORK_DETAIL, TEN_CONG_VIEC, WORK_BY_NAME, WORK_NAME } from "../Types/WorkType";

const stateDefault = {
    listWork: [],
    workNameValue: "",
    listWorkSearch: [],
    listMenuTypeWork: [],
    workDetail: [],
    categories: [],
};

export const WorkReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LIST_WORK: {
            state.listWork = action.listWork;
            return { ...state };
        }
        case WORK_NAME: {
            state.workNameValue = action.newWorkName;
            return { ...state };
        }
        case SET_WORK_BY_NAME: {
            state.listWorkSearch = action.tenCongViec;
            return { ...state };
        }
        case SET_MENU_TYPE_WORK: {
            state.listMenuTypeWork = action.listMenuTypeWork;
            return { ...state };
        }
        case SET_WORK_DETAIL: {
            state.workDetail = action.workDetail;
            return { ...state };
        }
        case "SEARCH_WORKNAME": {
            return { ...state };
        }
        case SET_CATEGORIES_WORK: {
            state.categories = action.categories;
            return { ...state };
        }
        default: {
            return { ...state };

        }
    }
};