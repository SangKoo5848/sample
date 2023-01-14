import React from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    
    background: ${OpenColor.indigo[6]};
    color: white;
    border-bottom: 1px solid ${OpenColor.indigo[7]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
`;

const Header = () => {
    return (
        <Wrapper>
            saju
        </Wrapper>
    );
};

export default Header;