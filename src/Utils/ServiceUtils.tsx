import axios from 'axios';
import { httpVerb } from '../types';

const doRequest = async (httpVerb: httpVerb, url: string, payload?: object) => {
    const token = localStorage.getItem('token');

    if (token) axios.defaults.headers[httpVerb]!['authorization'] = token;
    axios.defaults.headers[httpVerb]!['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers[httpVerb]!['Access-Control-Allow-Origin'] = '*';

    try {
        const response = await axios[httpVerb](url, payload);
        return response;
    } catch (error) {
        throw new Error('DB might be out of sync');
    }
};

export { doRequest };
