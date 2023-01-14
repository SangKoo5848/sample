import React from 'react';
import MemoViewer from '../components/MemoViewer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as uiActions from '../actions/uiAction';
import * as userActions from '../actions/userAction'

const MemoViewerContainer = (props) => {
    
    const {visible, memo, UIActions, UserActions} = props;
    const {username, password} = memo.toJS();

    return (
        <MemoViewer
            visible={visible}
            username ={username}
            password={password}
            onClose={UIActions.closeViewer}
        />
    );
};

export default connect(
    (state) => ({
        visible: state.uiReducer.getIn(['memo', 'open']),
        memo: state.uiReducer.getIn(['memo', 'info'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)

    })
)(MemoViewerContainer);
