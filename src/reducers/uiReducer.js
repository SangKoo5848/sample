import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { BLUR_INPUT, CHANGE_INPUT, FOCUSE_INPUT, RESET_INPUT, OPEN_VIEWER, CLOSE_VIEWER } from "../actions/uiAction";

const initialState = Map({
    write: Map({
        foucsed: false,
        title: '',
        body: ''
    }),
    memo: Map({
        open: false,
        info: Map({
            user_id: null,
            username: null,
            password: null
        })
    })
});

export default handleActions({
    [FOCUSE_INPUT]: (state) => state.setIn(['write', 'focused'], true),
    [BLUR_INPUT]: (state) => state.setIn(['write', 'focused'], false),
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        console.log("changeInput", name, value);
        return state.setIn(['write', name], value);
    },
    [RESET_INPUT]: (state) => state.set('write', initialState.get('write')),

    [OPEN_VIEWER]: (state, action) => state.setIn(['memo', 'open'], true).setIn(['memo', 'info'], action.payload),
    [CLOSE_VIEWER]: (state, action) => state.setIn(['memo', 'open'], false)
}, initialState);