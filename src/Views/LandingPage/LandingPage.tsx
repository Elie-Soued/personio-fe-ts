import { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { doRequest } from '../../Utils/ServiceUtils';
import { useNavigate } from 'react-router-dom';
import undersurface from '../../images/undersurface.jpg';
import landingpage from '../../images/landingpage.png';
import { AxiosResponse } from 'axios';
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage() {
    let [user_name, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const URLLogin =
        window.location.href === 'http://localhost:3000/'
            ? 'http://localhost:5000/users/login'
            : 'https://www.pilexlaflex.com:5002/users/login';

    const navigate = useNavigate();

    const login = async () => {
        try {
            const response: AxiosResponse | Error = await doRequest('post', URLLogin, {
                user_name,
                password,
            });

            if (response?.data.code === 404 || response?.data.code === 401) {
                alert(response?.data.message);
            } else {
                const token = response?.data.accessToken;
                localStorage.setItem('token', token);

                response.data.isadmin ? navigate(`/admin/${user_name}`) : navigate(`/dashboard/${user_name}`);
            }
        } catch (e) {
            console.log(e);
        }
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
                                        value={user_name}
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
                            </form>
                        </div>
                    </div>

                    <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100">
                            <div className="h-100">
                                <img
                                    className="w-100"
                                    src={landingpage}
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
