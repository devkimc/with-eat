import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from '../styles/Home.module.css';

export default function Home() {
    const [mapObj, setMapObj] = useState<any>();
    const [aaa, setaaa] = useState(0);
    const [bbb, setbbb] = useState(0);
    const [gasStationList, setGasStationList] = useState([]);

    console.log(mapObj);

    const initMap = (lat: number, lon: number) => {
        new naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 13,
        });
        const map = new window.naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(lat, lon),
            zoom: 13,
        });

        setMapObj(map);

        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lat, lon),
            map: map,
        });
    };

    useEffect(() => {
        // initMap(35.24706899999998, 128.863377);
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
        console.log(`${lat}|${lon}`);
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
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://nextjs.org'>With eat!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div id='map' style={{ width: '300px', height: '300px' }} />
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
