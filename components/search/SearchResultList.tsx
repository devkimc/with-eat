import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdOutlineBookmarks } from 'react-icons/md';
import { StoreStateType } from '../../store/store';

const SearchResultListBlock = styled.div`
    overflow-y: scroll;
    height: 25rem;
    margin-top: 1rem;

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #ebebeb;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #6d6d6d;
    }
`;

const Content = styled.div`
    display: flex;
    background-color: #f9f9f9;
    width: 95%;
    height: 5rem;
    margin: 0.1rem auto 1rem auto;
    /* margin-bottom: 1rem; // TODO: last-child */
    padding: 0.5rem;
    border-radius: 0.25rem;

    box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
`;

const ContentTextBox = styled.div``;

const ContentIconBox = styled.div`
    cursor: pointer;

    padding-left: 1rem;
    margin: auto 0;
`;

const ContentTop = styled.div`
    color: #333;
`;

const ContentTitle = styled.a`
    display: flex;
    align-items: center;
    color: #333;
    margin-bottom: 4px;
    font-size: 1rem;

    font-family: 'AppleSDGothicNeoB';
`;

const ContentAddress = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    margin-bottom: 4px;
    font-size: 0.7375rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 12rem;
`;

const ContentBottom = styled.div``;

const ContentTel = styled.span`
    color: #757570;
    margin-right: 8px;
    font-size: 0.735rem;
`;

const ContentCategory = styled.span`
    font-size: 0.735rem;
    color: #979797;
`;

const SearchResultList = () => {
    const searchResultList = useSelector(
        (state: StoreStateType) => state.search.searchResult,
    );

    return (
        <SearchResultListBlock>
            {searchResultList.map(place => (
                <Content key={place.id}>
                    <ContentTextBox>
                        <ContentTop>
                            <ContentTitle>{place.name}</ContentTitle>
                            <ContentAddress>{place.address}</ContentAddress>
                        </ContentTop>
                        <ContentBottom>
                            <ContentTel>{place.tel}</ContentTel>
                            <ContentCategory>{place.category}</ContentCategory>
                        </ContentBottom>
                    </ContentTextBox>
                    <ContentIconBox>
                        <MdOutlineBookmarks color="rgba(29,192,120,0.48)" />
                    </ContentIconBox>
                </Content>
            ))}
        </SearchResultListBlock>
    );
};

export default SearchResultList;
