import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../lib/style-utils';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Memo from './Memo';

const Wrapper = styled.div`
    display: flex;
    /* margin: 0 auto; */
    padding-left: 120px;
    padding-right: 120px;
    /* margin-left: 100px;
    margin-right: 100px; */
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content:space-between;
    font-size: 0px; /* inline-block 위아래 사이에 생기는 여백을 제거합니다 */

    ${media.mobile`
        margin-top: 0.25rem;
    `}
`;

const MemoList = ({memos, onOpen}) => {
    const memoList = memos.map(
        item => (
            <Memo
                key={item.get('user_id')}
                memo={item}
                onOpen={onOpen}
            />
        )
    );
    return (
        <Wrapper>
            {memoList}
        </Wrapper>
    );
};

MemoList.propTypes = {
    memos: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
            user_id: PropTypes.number,
            username: PropTypes.string,
            password: PropTypes.string
        })
    ),
    onOpen: PropTypes.func
}

export default MemoList;