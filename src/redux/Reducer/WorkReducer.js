import { SET_LIST_WORK, SET_MENU_TYPE_WORK, SET_WORK_BY_NAME, TEN_CONG_VIEC, WORK_BY_NAME, WORK_NAME } from "../Types/WorkType";

const stateDefault = {
    listWork: [],
    workNameValue: "",
    listWorkSearch: [],
    listMenuTypeWork: []
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
        default: {
            return { ...state };

        }
    }
};