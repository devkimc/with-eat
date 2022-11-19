import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TbSearch } from 'react-icons/tb';

import useInput from '../../hooks/useInput';
import { StoreStateType } from '../../store/store';
import {
    addSearchResult,
    clearSearchResult,
    SearchResultType,
} from '../../store/searchSlice';
import { hideMarker, makeMarker } from '../../utils/mapMarker-util';
import { addMarker, clearMarker } from '../../store/mapSlice';
import searchPlaceList from '../../api/naver/search';

const SearchInputBlock = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const Input = styled.input`
    width: 100%;
    outline: none;

    font-size: 0.9rem;
    font-family: 'AppleSDGothicNeoB';
    background-color: rgba(37, 157, 179, 0.12);
    border: 0.063rem solid rgba(37, 157, 179, 0.24);
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 10%);
    padding: 0.875rem 0.078rem;
    border-radius: 1.75rem;
    transition: all 0.2s ease;

    :focus {
        outline: unset;
        box-shadow: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 20%);
        border: 0.063rem solid #dedede;
        background-color: #fff;
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    cursor: pointer;
`;

const SearchInput = () => {
    const [searchIp, onChangeSearchIp] = useInput('');
    const { lat, lon } = useSelector((state: StoreStateType) => state.location);

    const mapObj = useSelector((state: StoreStateType) => state.map.map);
    const markers = useSelector((state: StoreStateType) => state.map.markers);
    // const stateObj = useSelector((state: StoreStateType) => state);

    const dispatch = useDispatch();

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onSearchPlaceList();
    };

    const onSearchPlaceList = async () => {
        const result = await searchPlaceList({ searchIp, lon, lat });

        if (result?.data.result) {
            dispatch(clearMarker());
            dispatch(clearSearchResult());
            markers.forEach(marker => hideMarker(marker));

            const resList = result.data.result.place.list;
            resList.forEach((place: SearchResultType) => {
                dispatch(
                    addSearchResult({
                        id: place.id,
                        name: place.name,
                        address: place.address,
                        tel: place.tel,
                        category: place.category,
                        context: place.context,
                        menuInfo: place.menuInfo,
                        thumUrl: place.thumUrl,
                        x: place.x,
                        y: place.y,
                    }),
                );

                const marker = makeMarker(mapObj, undefined, place.y, place.x);
                dispatch(addMarker(marker));
            });
        }
    };

    return (
        <SearchInputBlock>
            <Input
                maxLength={15}
                onChange={onChangeSearchIp}
                onKeyPress={onKeyPress}
            />
            <SearchIcon onClick={onSearchPlaceList}>
                <TbSearch color="#495057" />
            </SearchIcon>
        </SearchInputBlock>
    );
};

export default SearchInput;
