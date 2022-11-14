import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import useInput from '../../hooks/useInput';
import { StoreStateType } from '../../store/store';

const Input = styled.input`
    width: 7rem;
    outline: none;
`;

const SearchInput = () => {
    const [searchIp, onChangeSearchIp] = useInput('');
    const [gasStationList, setGasStationList] = useState([]);

    const { lat, lon } = useSelector((state: StoreStateType) => state.location);

    useEffect(() => {
        getGasStationList();
        if (gasStationList.length >= 20) {
            console.log('Log: gasStationList 20!');
        }
    }, []);

    const getGasStationList = () => {
        const naverSearchUrl = 'https://map.naver.com/v5/api/search';
        const gasStationQuery = '%EC%A3%BC%EC%9C%A0%EC%86%8C';
        console.log('Log: naverSearch start');
        axios
            .get(
                `${naverSearchUrl}?caller=pcweb&query=${gasStationQuery}&type=all&searchCoord=${lon};${lat}&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko`
            )
            .then((res: any) => {
                setGasStationList(res.data.result.place.list);

                console.log('Log: naverSearch success');
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
        <div>
            <Input onChange={onChangeSearchIp} />
            <button>검색</button>
        </div>
    );
};

export default SearchInput;
