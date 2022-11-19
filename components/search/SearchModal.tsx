import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';

const SearchModalBlock = styled.div`
    background-color: white;
    width: 19rem;
    height: 30.063rem;
    right: 5rem;
    top: 5rem;
    border-radius: 1.2rem;
    box-shadow: rgb(0 0 0 / 30%) 0.625rem 0.625rem 0.625rem;
    padding: 1rem 1rem;

    position: absolute;
    /* opacity: 0.8; */
    z-index: 1;
`;

const SearchModal = () => {
    return (
        <SearchModalBlock>
            <SearchInput />
            <SearchResultList />
        </SearchModalBlock>
    );
};

export default SearchModal;
