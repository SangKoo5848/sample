import React from 'react';

import OpenColor from 'open-color';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    text-align: right;
`;

const Button = styled.div`
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${OpenColor.indigo[7]};
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background:  ${OpenColor.gray[1]};
    };

    &:active {
        background: ${OpenColor.gray[2]};
    }
`;

const SaveButton = ({onClick}) => {
    return (
        <Wrapper>
            <Button onClick={onClick}>완료</Button>
        </Wrapper>
    );
};


SaveButton.propTypes = {
    onClick: PropTypes.func
}

export default SaveButton;