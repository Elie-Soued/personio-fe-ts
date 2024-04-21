import { MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import undersurface from '../../images/undersurface.jpg';
import passion from '../../images/passion.jpg';

export default function AdminPage() {
    const navigate = useNavigate();
    const url = window.location.pathname;
    const userName = url.split('/')[2];
    console.log('userName :>> ', userName);

    console.log('url :>> ', url);
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
                        <div className="d-flex flex-row w-100 justify-content-around">
                            <div className=" d-flex align-items-center justify-content-center pb-4">
                                <button
                                    className="btn btn-primary btn-block fa-lg  mb-3 active w-75"
                                    type="button"
                                    onClick={() => {
                                        navigate(`/dashboard/${userName}`);
                                    }}
                                >
                                    Go to the Dashboard
                                </button>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-block fa-lg  mb-3 active w-75"
                                    onClick={() => {
                                        navigate('/register');
                                    }}
                                >
                                    Create New Colleague
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100">
                            <div className="h-100">
                                <img
                                    className="w-100"
                                    src={passion}
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
