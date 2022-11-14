import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { StoreStateType } from '../../store/store';

const SearchResultListBlock = styled.div`
    margin-top: 1rem;
`;

const Content = styled.div`
    background-color: #f9f9f9;
    width: 95%;
    height: 5rem;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 0.25rem;

    box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
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
`;

const ContentAddress = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    margin-bottom: 4px;
    font-size: 0.9375rem;
`;

const ContentBottom = styled.div``;

const ContentTel = styled.span`
    color: #757570;
    margin-right: 8px;
    font-size: 0.9375rem;
`;

const ContentCategory = styled.span`
    font-size: 0.875rem;
    color: #979797;
`;

const SearchResultList = () => {
    const state = useSelector((state: StoreStateType) => state);
    console.log(state.search);

    return (
        <SearchResultListBlock>
            <Content>
                <ContentTop>
                    <ContentTitle>모에뜨</ContentTitle>
                    <ContentAddress>
                        서울특별시 강서구 개화동 376-57
                    </ContentAddress>
                </ContentTop>
                <ContentBottom>
                    <ContentTel>02-2664-6163</ContentTel>
                    <ContentCategory>한식</ContentCategory>
                </ContentBottom>
            </Content>
        </SearchResultListBlock>
    );
};

export default SearchResultList;
