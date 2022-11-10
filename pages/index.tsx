import Head from 'next/head';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Map = styled.div`
    width: 100%;
    min-height: 50rem;
`;

const SearchBlock = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 15px;
    width: 14rem;
    height: 20.063rem;
    right: 5rem;
    top: 5rem;
    opacity: 0.8;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 30%) 10px 10px 10px;
`;

export default function Home() {
    const [mapObj, setMapObj] = useState<any>();
    const [aaa, setaaa] = useState(0);
    const [bbb, setbbb] = useState(0);
    const [gasStationList, setGasStationList] = useState([]);

    const initMap = (lat: number, lon: number) => {
        const ringIcon = `               
            <div class='gps_ring'>
                <div class='gps_ring1'>
                    <div class='gps_ring2'></div>
                </div>
            </div>`;

        const map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 15,
        });

        setMapObj(map);

        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lat, lon),
            map: map,
            icon: {
                content: ringIcon.repeat(2),
                size: new naver.maps.Size(38, 58),
                anchor: new naver.maps.Point(19, 58),
            },
        });
    };

    useEffect(() => {
        console.log(setCurrentLocation());
    }, []);

    useEffect(() => {
        if (gasStationList.length >= 20) {
            console.log('Log: gasStationList 20!');
        }
    }, [gasStationList]);

    const setCurrentLocation = () => {
        const geoApi = navigator.geolocation;
        if (geoApi) {
            geoApi.getCurrentPosition(onGeoOkay, onGeoError);
        } else {
            console.error('Error: geolocation failure');
        }
    };

    const onGeoOkay = async (position: {
        coords: { latitude: number; longitude: number };
    }) => {
        initMap(position.coords.latitude, position.coords.longitude);
    };

    const onGeoError = async () => {
        alert("I can't find you. No weather for you.");
    };

    const getGasStationList = (lat: number, lon: number) => {
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
                res.data.result.place.list.forEach((gas: any) => {
                    const newMarker = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(gas.y, gas.x),
                        map: mapObj,
                    });
                    newMarker.setMap(mapObj);
                });
            })
            .catch(() => {
                console.log('Log: naverSearch failure');
            });
    };

    return (
        <Fragment>
            <Head>
                <title>WITH EAT</title>
                <meta
                    name='description'
                    content='함께 먹고 싶은 맛집을 기록하는 지도'
                />
            </Head>

            <Map id='map' />

            <SearchBlock></SearchBlock>
        </Fragment>
    );
}
