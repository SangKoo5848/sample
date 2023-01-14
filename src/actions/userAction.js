import * as api from '../serverapi/serverApi';
import { createAction } from 'redux-actions';

export const CREATE_MEMO = 'memo/CREATE_MEMO';
export const GET_INITIAL_MEMO = 'memo/GET_INITIAL_MEMO';


export const createMemo = createAction(CREATE_MEMO, api.addMemo);
export const getInitialMemo = createAction(GET_INITIAL_MEMO, api.getMemoList);

