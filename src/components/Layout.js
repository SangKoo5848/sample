import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/style-utils';

const Wrapper = styled.div`
    padding-top:60px;
`;



const Layout = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

Layout.Main = styled.div`
    margin: 0 auto;
    margin-top:  2rem;
    /* width: 2400px; */
    position: relative;
    transition: all .3s;

    ${media.desktop`
        width: 2000px;
    `}

    ${media.tablet`
        margin-top:1rem;
        width: calc(100% -2rem);
    `}

    
    ${media.mobile`
        margin-top: 0.5rem;
        width: calc(100% -1rem);
    `}


`

export default Layout;