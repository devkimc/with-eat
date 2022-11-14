import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeLocation } from '../../store/locationSlice';
import { searchCurrentLocation } from '../../utils/geoLocation-util';

import { GpsRing } from '../Icon/GpsRing';

const Map = styled.div`
    width: 100%;
    min-height: 50rem;
`;

const MapView = () => {
    const [mapObj, setMapObj] = useState<any>();
    const dispatch = useDispatch();

    const initMap = (lat: number, lon: number) => {
        const map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(lat, lon),
            zoom: 15,
        });

        setMapObj(map);

        new naver.maps.Marker({
            position: new naver.maps.LatLng(lat, lon),
            map: map,
            icon: {
                content: GpsRing.repeat(2),
                size: new naver.maps.Size(38, 58),
                anchor: new naver.maps.Point(19, 58),
            },
        });
    };

    useEffect(() => {
        searchCurrentLocation(onGeoOkay, onGeoError);
    }, []);

    const onGeoOkay = async (position: {
        coords: { latitude: number; longitude: number };
    }) => {
        dispatch(
            changeLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            })
        );
        initMap(position.coords.latitude, position.coords.longitude);
    };

    const onGeoError = async () => {
        alert("I can't find you. No weather for you.");
    };
    return <Map id='map' />;
};

export default MapView;
