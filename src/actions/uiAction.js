import { createAction } from "redux-actions";

const prevPath ='uiAction/write';
export const FOCUSE_INPUT = prevPath + '/FOCUS_INPUT';
export const BLUR_INPUT = prevPath + '/BLUR_INPUT';
export const CHANGE_INPUT = prevPath + '/CHANGE_INPUT';
export const RESET_INPUT = prevPath + '/RESET_INPUT';


export const OPEN_VIEWER = 'OPEN_VIERER';
export const CLOSE_VIEWER = 'CLOSE_VIEWER';



export const focuseInput = createAction(FOCUSE_INPUT);
export const blurInput = createAction(BLUR_INPUT);
export const changeInput = createAction(CHANGE_INPUT);
export const resetInput = createAction(RESET_INPUT);


export const openViewer = createAction(OPEN_VIEWER);
export const closeViewer = createAction(CLOSE_VIEWER);