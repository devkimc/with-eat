import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const SearchModalBlock = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 14rem;
    height: 20.063rem;
    right: 5rem;
    top: 5rem;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 30%) 10px 10px 10px;
    padding: 1rem 1rem;

    position: absolute;
    /* opacity: 0.8; */
    z-index: 1;
    cursor: pointer;
`;

const SearchModal = () => {
    return (
        <SearchModalBlock>
            <SearchInput />
        </SearchModalBlock>
    );
};

export default SearchModal;
