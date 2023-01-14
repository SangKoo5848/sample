import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputSet, SaveButton } from '../components/Shared';
import { InputPlaceholder, WhiteBox } from '../components/WriteMemo';
// import { focuseInput, blurInput, changeInput, resetInput } from '../actions/uiAction';
import * as uiActions from '../actions/uiAction';
import * as userActions from '../actions/userAction'

import useOutsideClick from '../lib/useOutsideClick';
import { addMemo } from '../serverapi/serverApi';

const WriteMemo = (props) => {
    const {UIActions, focused, title, body } = props;
    const [show, setShow] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, ()=> {
        if(show){
            setShow(false);
            UIActions.blurInput();
        }
    })

    const handleFocus = () => {
        // 포커스 된 상태가 아닐 때만 실행합니다.
        if(!show) {
            UIActions.focuseInput();
            setShow(true);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        UIActions.changeInput({name,value})
    }

    const handleCreate = async (e) =>{
        if(title == undefined || title == '' || title == null){
            alert('Title을 입력하세요.');
            return;
        }

        if(body == undefined || body == '' || body == null){
            alert('Body 을 입력하세요.');
            return;
        }

        try{
            console.log(title, body);
            addMemo({
                'username': title,
                'password': body
            }).then(res=>{
                console.log(res);
                UIActions.resetInput();
            });
        }
        catch(e){

        }
    };


    
    return (
        show ? (
            <WhiteBox ref={ref}>
                <InputPlaceholder/>
                <InputSet onChange={handleChange} title={title} body={body} />
                <SaveButton onClick={handleCreate}/>
            </WhiteBox>
        ) : 
        <WhiteBox onClick={handleFocus} >
            <InputPlaceholder/>
        </WhiteBox>
    );
};

// export default WriteMemo;
export default connect(
    (state) => ({
        focused: state.uiReducer.getIn(['write', 'focused']),
        title: state.uiReducer.getIn(['write', 'title']),
        body: state.uiReducer.getIn(['write', 'body'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
    // {
    //     // focuseInput, blurInput, changeInput, resetInput,
    //     UIActions: bindActionCreators(uiActions, dispatch)
    //     // createMemo
    // }
)(WriteMemo);