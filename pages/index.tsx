import Head from 'next/head';
import React from 'react';
import MapView from '../components/map/MapView';
import SearchModal from '../components/search/SearchModal';

const Home = () => {
    return (
        <>
            <Head>
                <title>WITH EAT</title>
                <meta
                    name="description"
                    content="함께 먹고 싶은 맛집을 기록하는 지도"
                />
            </Head>
            <SearchModal />
            <MapView />
        </>
    );
};

export default Home;
