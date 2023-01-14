import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import TextArea from 'react-textarea-autosize';

const TitleInput = styled.input`
    width:100%;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1.25rem;
`;

const StyledTextArea = styled(TextArea)`
    width: 100%;
    border: none;
    outline:none;
    font-weight: 300;
    font-size: 1.1rem;
    margin-top: 1rem;
    resize:none;
`

const InputSet = (props) => {
    const {onChange, title, body} = props;
    const titleRef = useRef();


    useEffect(() => {
        titleRef.current.focus();
        console.log("DIDMOUNT");
    },[])

    return (
        <div>
            <TitleInput
                name="title"
                onChange={onChange}
                placeholder="Title"
                value={title}
                ref ={titleRef}
            />
            <StyledTextArea
                minRows={3}
                maxRows={20}
                placeholder="메모..."
                name="body"
                onChange={onChange}
                value={body}
            />
            
        </div>
        
    );
};


InputSet.propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string
}

export default InputSet;

//react-immutable-proptypes