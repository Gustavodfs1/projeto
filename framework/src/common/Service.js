import axios from 'axios';

const MakeRequest = async (params) => {
    try {
        const response = await axios({
            method: params.method,
            url: params.url,
            baseURL: 'https://jsonplaceholder.typicode.com',
            responseType: 'json',
        });

        return response.data;
    }
    catch {
        return null;
    }
}

const GetAlbums = async () => {
    const params = {
        method: 'GET',
        url: '/albums'
    };

    return await MakeRequest(params);
}
export { GetAlbums };