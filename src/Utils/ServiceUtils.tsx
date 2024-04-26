import axios from 'axios';

// URL for Development

const URL = 'http://localhost:5000/users';
const URLRegister = 'http://localhost:5000/users/register';
const URLLogin = 'http://localhost:5000/users/login';

// URL for Production

// const URL = 'http://pilexlaflex.com:5000/users';
// const URLRegister = 'http://pilexlaflex.com:5000/users/register';
// const URLLogin = 'http://pilexlaflex.com:5000/users/login';

type httpVerb = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

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

export { doRequest, URL, URLRegister, URLLogin };
