export const makeMarker = (
    map: naver.maps.Map,
    icon: string | undefined,
    lat: number,
    lon: number,
) => {
    const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lon),
        map,
        icon: icon
            ? {
                  content: icon,
                  size: new naver.maps.Size(38, 58),
                  anchor: new naver.maps.Point(19, 58),
              }
            : undefined,
    });

    return marker;
};

export const hideMarker = (marker: naver.maps.OverlayView) => {
    marker.setMap(null);
};
