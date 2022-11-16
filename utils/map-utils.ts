const makeMap = (lat: number, lon: number) => {
    const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(lat, lon),
        zoom: 15,
    });

    return map;
};
export default makeMap;
