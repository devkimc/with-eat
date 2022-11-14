import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { TbSearch } from 'react-icons/tb';

import useInput from '../../hooks/useInput';
import { StoreStateType } from '../../store/store';
import { addSearchResult, SearchResultType } from '../../store/searchSlice';

const SearchInputBlock = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const Input = styled.input`
    width: 100%;
    outline: none;

    background-color: rgba(29, 192, 120, 0.12);
    border: 1px solid rgba(29, 192, 120, 0.24);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    padding: 14px 20px;
    border-radius: 28px;
    transition: all 0.2s ease;

    :focus {
        outline: unset;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
        border: 1px solid #dedede;
        background-color: #fff;
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
`;

const SearchInput = () => {
    const [searchIp, onChangeSearchIp] = useInput('');

    const test = useSelector((state: StoreStateType) => state);
    const { lat, lon } = useSelector((state: StoreStateType) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        getGasStationList();
    }, []);

    const getGasStationList = () => {
        const naverSearchUrl = 'https://map.naver.com/v5/api/search';
        const gasStationQuery = '맛집';

        axios
            .get(
                `${naverSearchUrl}?caller=pcweb&query=${gasStationQuery}&type=all&searchCoord=${lon};${lat}&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko`
            )
            .then((res: any) => {
                const resList = res.data.result.place.list;
                resList.forEach((result: SearchResultType) => {
                    dispatch(
                        addSearchResult({
                            id: result.id,
                            address: result.address,
                            category: result.category,
                            context: result.context,
                            menuInfo: result.menuInfo,
                            thumUrl: result.thumUrl,
                            x: result.x,
                            y: result.y,
                        })
                    );
                });

                // res.data.result.place.list.forEach((gas: any) => {
                //     const newMarker = new naver.maps.Marker({
                //         position: new naver.maps.LatLng(gas.y, gas.x),
                //         map: mapObj,
                //     });
                //     newMarker.setMap(mapObj);
                // });
            })
            .catch(() => {
                console.log('Log: naverSearch failure');
            });
    };

    return (
        <SearchInputBlock>
            <Input maxLength={10} onChange={onChangeSearchIp} />
            <SearchIcon>
                <TbSearch color='#495057' />
            </SearchIcon>
        </SearchInputBlock>
    );
};

export default SearchInput;
