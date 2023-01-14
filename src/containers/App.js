import React, { useEffect } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import WriteMemo from './WriteMemo';
import MemoListContainer from './MemoListContainer';

import * as userActions from '../actions/userAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MemoViewerContainer from './MemoViewerContainer';

function App(props) {
    useEffect(() =>{
        console.log("APP");
        const {UserActions} = props;
        UserActions.getInitialMemo();
    },[])   


    return (
        <Layout>
            <Header/>
            <Layout.Main>
                <WriteMemo></WriteMemo>
                <MemoListContainer/>
            </Layout.Main>
            <MemoViewerContainer/>
        </Layout>
    );
}

export default connect((state)=>({}), 
(dispatch)=> ({
    UserActions: bindActionCreators(userActions, dispatch)
}))(App);