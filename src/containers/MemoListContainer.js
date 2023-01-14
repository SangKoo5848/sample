import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import MemoList from '../components/MemoList';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/uiAction';

const MemoListContainer = (props) => {
    const { memos, UIActions } = props;

    return (
        <MemoList 
            memos={memos}
            onOpen={UIActions.openViewer}
        />
    );
};

export default connect(
    (state) => ({
        memos: state.userReducer.get('data')
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch)
    })
)(MemoListContainer);