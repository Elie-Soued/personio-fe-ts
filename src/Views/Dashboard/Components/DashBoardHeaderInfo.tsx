import React from 'react';

import { faBriefcase, faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmployeeProfileInterface } from '../../../constants';

export default function DashboardHeaderInfo(userData: EmployeeProfileInterface) {
    const { user_name, position, team, department, office } = userData.public;
    const { supervisor, hire_date } = userData.hrInformation;

    return (
        <div className="d-flex flex-row col-12 h-75">
            <div className="col-10">
                <span>
                    <h4>{user_name}</h4>
                </span>
                <p className="d-flex flex-row  col-12">
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
                <p className="d-flex flex-row  col-12">
                    <span>
                        <h6>Since {hire_date}</h6>
                    </span>
                    <span>
                        <h6>Reports to {supervisor}</h6>
                    </span>
                </p>
            </div>
        </div>
    );
}
