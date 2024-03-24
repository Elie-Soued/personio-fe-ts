import React from 'react';

import { faBriefcase, faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    userData: any;
}

export default function Header({ userData }: Props) {
    // password = 57566
    // Joe Rahme

    // password = 39120
    // Guillaume Clere

    const sections = ['Personal Info', 'Salary', 'Documents', 'Absence', 'Onboarding', 'Notes'];

    const { username, position, team, department, office, supervisor, hiredate } = userData;

    return (
        <div className="d-flex flex-column h-100">
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
            <div className="col-12 h-25" style={{ border: '1px solid black' }}>
                <p className="d-flex flex-row  col-12">
                    {sections.map((section) => (
                        <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span className="m-2">{section}</span>
                        </a>
                    ))}
                </p>
            </div>
        </div>
    );
}
