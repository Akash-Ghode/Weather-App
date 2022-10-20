import axios from 'axios';

const URL = 'http://api.weatherstack.com/current';
const API_KEY = 'a4cdf2533d3ef40c9d0b07500ad79cd7';

export const fetchWeather = async (q) => {
    const { data } = await axios.get(URL, {
        params: {
            query: q,
            access_key: API_KEY,
        }
    });

    return data;
}

