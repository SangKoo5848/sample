import React from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';
import PropTypes from 'prop-types'
import { media } from '../../lib/style-utils';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Sizer = styled.div`
    display:inline-block;
    width: 24%;
    padding: 5px;
`;

const Square = styled.div`
    padding-top: 100%;
    position: relative;
    background: white;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;


// 실제 내용이 들어가는 부분입니다.
const Contents = styled.div`
    position: absolute;
    /* border-radius: 50px; */
    top: 0.5rem;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;

    /* 텍스트가 길어지면 새 줄 생성; 박스 밖의 것은 숨김 */
    white-space: pre-wrap;
    /* overflow: hidden; */
`;

const Title = styled.div`
    font-size: 1.85rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 1.1rem;
    /* background: #e0efff; */

`;

const Body = styled.div`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${OpenColor.gray[7]};
    margin-top: 1rem;
`;
const UserInfoDiv = styled.div`
    margin: 0 auto !important;
    border-radius:  15px !important;
    max-width: 400px;
    overflow: hidden;
    max-height: 210px;    object-fit: cover;
`;

const UserImage = styled.img`
    max-width: 100%;
`
const handleClick = () =>{
    const {memo, onOpen} = this.props;
    debugger;
    onOpen(memo);
}

const Memo = (props) => {
    const {memo, onOpen} = props;
    const {username, password} = memo.toJS();
    // debugger;
    const handleClick = () =>{
        onOpen(memo);
    }

    return (
        <Sizer>
            <Square onClick={handleClick}>
                <Contents>
                    {username && <Title>{username}</Title>}
                    <UserInfoDiv>
                        {/* <UserImage src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"/> */}
                        <UserImage src="./1111.png"/>
                    </UserInfoDiv>
                    <Body>{password}</Body>

                    
                    {/* <img alt="TEST" src ="https://images.unsplash.com/photo-1536323760109-ca8c07450053"></img> */}
                    {/* <Body>{password}</Body>
                    <UserInfoDiv>TEST</UserInfoDiv> */}
                </Contents>

            </Square>
        </Sizer>
    );
};


Memo.propTypes = {
    user_id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string
    // memo: ImmutablePropTypes.listOf(
    //     ImmutablePropTypes.mapContains({
    //         user_id: PropTypes.number,
    //         username: PropTypes.string,
    //         password: PropTypes.string
    //     })
    // ),
    // onOpen: PropTypes.func
}


export default Memo;