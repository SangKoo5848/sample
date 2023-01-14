import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-weight: 300;
    width:700px;
    font-size: 1.2rem;
`;

const InputPlaceholder = () => (
    <Wrapper>
        내용을 입력하세요...
    </Wrapper>
);

export default InputPlaceholder;