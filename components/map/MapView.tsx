import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeLocation } from '../../store/locationSlice';
import { changeMap } from '../../store/mapSlice';
import searchCurrentLocation from '../../utils/geoLocation-util';
import makeMap from '../../utils/map-utils';
import { makeMarker } from '../../utils/mapMarker-util';
import GpsRing from '../Icon/GpsRing';

const Map = styled.div`
    width: 100%;
    height: 100vh;
`;

const MapView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        searchCurrentLocation(onGeoOkay, onGeoError);
    }, []);

    const initMap = (lat: number, lon: number) => {
        const map = makeMap(lat, lon);
        makeMarker(map, GpsRing, lat, lon);
        dispatch(changeMap(map));
    };

    const onGeoOkay = (position: {
        coords: { latitude: number; longitude: number };
    }) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        initMap(lat, lon);
        dispatch(changeLocation({ lat, lon }));
    };

    const onGeoError = () => {
        alert('geoLocation error: 현재 위치를 찾을 수 없습니다.');
    };
    return <Map id="map" />;
};

export default MapView;
