export const searchCurrentLocation = (
    onGeoOkay: PositionCallback,
    onGeoError: PositionErrorCallback | null | undefined
) => {
    const geoApi = navigator.geolocation;
    if (geoApi) {
        geoApi.getCurrentPosition(onGeoOkay, onGeoError);
    } else {
        console.error('Error: geolocation failure');
    }
};
