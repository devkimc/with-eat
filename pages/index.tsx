import Head from 'next/head';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import styles from '../styles/Home.module.css';

const Map = styled.div`
    width: 100%;
    min-height: 50rem;
`;

export default function Home() {
    const [mapObj, setMapObj] = useState<any>();
    const [aaa, setaaa] = useState(0);
    const [bbb, setbbb] = useState(0);
    const [gasStationList, setGasStationList] = useState([]);

    const initMap = (lat: number, lon: number) => {
        new naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 15,
        });
        const map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 15,
        });

        setMapObj(map);

        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lat, lon),
            map: map,
            icon: {
                content: `
                <div class='gps_ring'>
                    <div class='gps_ring1'>
                        <div class='gps_ring2'></div>
                    </div>
                </div>
    
                <div class='gps_ring'>
                    <div class='gps_ring1'>
                        <div class='gps_ring2'> </div>
                    </div>
                </div>`,
                size: new naver.maps.Size(38, 58),
                anchor: new naver.maps.Point(19, 58),
            },
        });
    };

    useEffect(() => {
        setCurrentLocation();
    }, []);

    useEffect(() => {
        if (gasStationList.length >= 20) {
            console.log('Log: gasStationList 20!');
        }
    }, [gasStationList]);

    const setCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(positionCallBack);
            console.log(navigator.geolocation);
        } else {
            console.error('Error: geolocation failure');
        }
    };

    const positionCallBack = async (position: {
        coords: { latitude: number; longitude: number };
    }) => {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        setaaa(lat);
        setbbb(lon);
        initMap(lat, lon);
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
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Map id='map' />
        </Fragment>
    );
}
