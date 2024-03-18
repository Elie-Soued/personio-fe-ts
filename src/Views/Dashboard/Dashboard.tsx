import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doRequest, URL } from '../../Utils/ServiceUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faHouse, faMagnifyingGlass, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    const getUserData = async () => {
        const response: any = await doRequest('get', URL);
        console.log(response);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div
            className="row g-0"
            style={{
                border: '4px dashed black',

                backgroundColor: '#eee',
            }}
        >
            <div
                className="d-flex align-items-center col-md-2 p-2 ${'h-md-100 h-25'}"
                style={{ border: '4px dashed red' }}
            >
                <ul
                    className=" w-100 h-100  d-flex flex-row flex-md-column"
                    style={{ listStyle: 'none', border: '4px dashed green' }}
                >
                    <li className="mb-2">
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faHouse} />
                            <span className="m-2">Home</span>
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span className="m-2">Search</span>
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="m-2">Inbox</span>
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faUserFriends} />

                            <span className="m-2">Employees</span>
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <span className="m-2">Calendar</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className="d-flex flex-column align-items-center col-md-10 col-12  "
                style={{ border: '4px dashed purple', height: '95vh' }}
            >
                <div className="col-12 h-25" style={{ border: '4px solid black' }}>
                    hello
                </div>
                <div className="col-12 h-75" style={{ border: '4px solid green' }}>
                    how are you?
                </div>
            </div>
        </div>
    );
}
