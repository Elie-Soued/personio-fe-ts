import { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { doRequest, URLLogin } from '../../Utils/ServiceUtils';
import { useNavigate } from 'react-router-dom';
import undersurface from '../../images/undersurface.jpg';
import responsability from '../../images/responsability.jpg';
import { AxiosResponse } from 'axios';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        const response: AxiosResponse | Error = await doRequest('post', URLLogin, {
            username,
            password,
        });

        if (response?.data.code === 404) {
            alert(response?.data.message);
        } else if (response?.data.code === 401) {
            alert(response?.data.message);
        } else {
            setTokenAndNavigate(response);
        }
    };

    const register = () => {
        navigate('/register');
    };

    const setTokenAndNavigate = (response: AxiosResponse) => {
        const token = response?.data.accessToken;
        localStorage.setItem('token', token);
        navigate(`/dashboard/${username}`);
    };

    return (
        <div
            className="p-5"
            style={{
                backgroundColor: '#eee',
                border: '4px solid white',
                height: '100vh',
            }}
        >
            <MDBContainer
                className="my-5 gradient-form h-auto"
                style={{
                    backgroundColor: 'white',
                    width: 'auto',
                    padding: 0,
                }}
            >
                <div className="row g-0">
                    <div className="d-flex align-items-center col-lg-6 p-4">
                        <div className="d-flex flex-column w-100">
                            <form>
                                {/* Email */}
                                <div className="d-flex justify-content-center p-2">
                                    <input
                                        type="email"
                                        id="form2Example11"
                                        className="form-control w-75 "
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                    />
                                    <label className="form-label" htmlFor="form2Example11"></label>
                                </div>
                                {/* Password*/}
                                <div className="d-flex justify-content-center p-2">
                                    <input
                                        type="password"
                                        id="form2Example22"
                                        className="form-control w-75"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <label className="form-label" htmlFor="form2Example22"></label>
                                </div>
                                {/* Sign in + forgot password*/}
                                <div className=" d-flex flex-column justify-content-center text-center pt-1 mb-5 pb-1">
                                    <div className="d-flex justify-content-center p-2">
                                        <button
                                            className="btn btn-primary btn-block fa-lg  mb-3 active w-75"
                                            type="button"
                                            onClick={() => {
                                                login();
                                            }}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                    <a className="text-muted" href="#!">
                                        Forgot password?
                                    </a>
                                </div>
                                {/* create account*/}
                                <div className="d-flex align-items-center justify-content-center pb-4">
                                    <p className="mb-0 me-2">Don't have an account?</p>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => {
                                            register();
                                        }}
                                    >
                                        Create New Colleague
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100">
                            <div className="h-100">
                                <img
                                    className="w-100"
                                    src={responsability}
                                    style={{ borderRadius: '5px' }}
                                    alt="loginImage"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="col-xl-12">
                        <img className="w-100" src={undersurface} style={{ borderRadius: '5px' }} alt="footer"></img>
                    </div>
                </div>
            </MDBContainer>
        </div>
    );
}
