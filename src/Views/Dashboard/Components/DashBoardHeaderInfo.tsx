import React from 'react';

import { faBriefcase, faMapMarker, faUsers, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmployeeProfileType } from '../../../types';

export default function DashboardHeaderInfo(userData: EmployeeProfileType) {
    const { position, team, department, office, first_name, last_name } = userData.public;
    const { supervisor, hire_date } = userData.hrInformation;

    return (
        <div className="d-flex flex-row">
            <div>
                <div>
                    <input
                        type="file"
                        id="upload"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            console.log(e);
                        }}
                    />
                    <label
                        htmlFor="upload"
                        style={{
                            background: 'rgba(0,0,0,.122)',
                            borderRadius: '50%',
                            height: '60px',
                            width: '60px',
                            margin: '0 10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FontAwesomeIcon icon={faUpload} />
                    </label>
                </div>
            </div>
            <div className="d-flex flex-row col-12 h-75">
                <div>
                    <span>
                        <h4>
                            {first_name} {last_name}
                        </h4>
                    </span>
                    <p style={{ margin: 0 }} className="d-flex flex-row  col-12">
                        <span className="d-flex flex-row">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <h6> &nbsp; {position} &nbsp; </h6>
                        </span>
                        <span className="d-flex flex-row">
                            <FontAwesomeIcon icon={faUsers} />
                            <h6>
                                &nbsp; {team} , {department} &nbsp;
                            </h6>
                        </span>
                        <span className="d-flex flex-row">
                            <FontAwesomeIcon icon={faMapMarker} />
                            <h6>&nbsp;{office}</h6>
                        </span>
                    </p>
                    <p style={{ margin: 0 }} className="d-flex flex-row  col-12">
                        <span>
                            <h6>Since {hire_date}</h6>
                        </span>
                        <span>
                            <h6>Reports to {supervisor}</h6>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
