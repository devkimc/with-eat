import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://map.naver.com/v5/api/search`,
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response.data.error) {
            console.log(`Place 검색 오류: ${response.data.error.displayMsg}`);
        }
        return response;
    },
    (error) => {
        // TODO: 추가 에러처리 로직
        return Promise.reject(error);
    }
);

export default axiosClient;
