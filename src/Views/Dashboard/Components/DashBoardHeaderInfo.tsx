import React from 'react';

import { faBriefcase, faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    userData: any;
}

export default function DashboardHeaderInfo({ userData }: Props) {
    const { username, position, team, department, office, supervisor, hiredate } = userData;

    return (
        <div className="d-flex flex-row col-12 h-75">
            <div className="col-2">Photo</div>
            <div style={{ border: '1px solid black' }} className="col-10">
                <span>
                    <h4>{username}</h4>
                </span>
                <p className="d-flex flex-row  col-12">
                    <span className="d-flex flex-row">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h6> {position}</h6>
                    </span>
                    <span className="d-flex flex-row">
                        <FontAwesomeIcon icon={faUsers} />
                        <h6>
                            {team} , {department}
                        </h6>
                    </span>
                    <span className="d-flex flex-row">
                        <FontAwesomeIcon icon={faMapMarker} />
                        <h6>{office}</h6>
                    </span>
                </p>
                <p className="d-flex flex-row  col-12">
                    <span>
                        <h6>Since {hiredate}</h6>
                    </span>
                    <span>
                        <h6>Reports to {supervisor}</h6>
                    </span>
                </p>
            </div>
        </div>
    );
}
