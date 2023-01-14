import { handleActions } from "redux-actions";
import { fromJS, List, Map } from "immutable";
import { pender } from 'redux-pender'
import { GET_INITIAL_MEMO } from "../actions/userAction";

const initialState = Map({
    data: List()
});

console.log("USERREDUCER");
console.log(initialState);

export default handleActions({
    ...pender({
        type: GET_INITIAL_MEMO,
        onSuccess: (state, action) => state.set('data', fromJS(action.payload.data))
    })
}, initialState);