import axiosClient from './axiosClient';

type SearchPlaceListIp = {
    searchIp: string;
    lon: number;
    lat: number;
};

export const searchPlaceList = async ({
    searchIp,
    lon,
    lat,
}: SearchPlaceListIp) => {
    const defaultParams =
        'displayCount=20&isPlaceRecommendationReplace=true&lang=ko';
    return await axiosClient.get(
        `?caller=pcweb&query=${searchIp}&type=all&searchCoord=${lon};${lat}&page=1&${defaultParams}`
    );
};
