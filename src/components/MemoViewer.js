import OpenColor from 'open-color';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import { InputSet, SaveButton } from '../components/Shared';


const Dimmend = styled.div`
    background: ${OpenColor.black};
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    
    position: fixed;
    z-index: 10;
    opacity: 0.7;
`;

const Viewer = styled.div`
    background: white;
    position: fixed;
    height: auto;
    z-index: 15;
    /*  */
    border: 1px solid #bacdd8;
    border-radius: 12px;
    max-width: 428px;
    /*  */
    padding:1rem;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const UserImage = styled.img`
    width:428px;
    border-radius: 12px;
    height:214px;
    object-fit: cover;
`

const Header = styled.div`
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 12px;
`
const DetailContainer = styled.div`
    padding: 16px 8px 8px 8px;
`

const TagName = styled.span`
    padding: 4px 8px;
    border: 1px solid #e5eaed;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    color: #788697;
`
const Profil = styled.div`
    font-size: 14px;
    color:#7f8c9b;
    line-height: 150%;
    white-space: pre-wrap;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
`


const CloseButton = styled.span`
    float: right;
`


const MemoViewer = ({ visible, username, password, onClose, onSubmit }) => {
    if (!visible) return null;

    return (
        <div>
            <Dimmend onClick={onClose} />
            <Viewer>
                <Header>
                    <CloseButton>종료</CloseButton>
                    {username}
                </Header>
                {/* <UserImage src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"/> */}
                <UserImage src="./1111.png"/>
                <DetailContainer>
                    <TagName>프로필</TagName>
                    <Profil>
                        XXXX대학교 수료 <br/>
                        XXXXX 자격증 취득 <br/>
                    </Profil>
                    <TagName>소개</TagName>
                    <Profil>
                        XXXX의 XXX를 해드립니다. <br/>
                    </Profil>
                </DetailContainer>
            </Viewer>
        </div>
    );
};

MemoViewer.propTypes = {
    visible: PropTypes.bool,
    user_id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
}

export default MemoViewer;