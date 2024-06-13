import React, { useState, useEffect } from 'react';
import { doRequest } from '../../../Utils/ServiceUtils';
import { faBriefcase, faMapMarker, faUsers, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmployeeProfileType } from '../../../types';
import './Dashboard.css';

export default function DashboardHeaderInfo(userData: EmployeeProfileType) {
    const { position, team, department, office, first_name, last_name } = userData.public;
    const { supervisor, hire_date } = userData.hrInformation;

    const [profilePicture, setProfilePicture] = useState<any>(undefined);

    const URLUpload = process.env.REACT_APP_URLUpload;
    const URLProfilePicture = process.env.REACT_APP_URLProfilePicture;

    const getProfilePicture = async () => {
        try {
            const response = await doRequest('get', URLProfilePicture);

            console.log('response :>> ', response);

            const path = response.data.profilePicturePath;

            console.log(' :`${URLProfilePicture}/${path}`>> ', `${URLProfilePicture}/${path}`);

            setProfilePicture(`${URLProfilePicture}/${path}`);

            //console.log('profilePicture :>> ', profilePicture);
        } catch (e) {
            console.log(e);
        }
    };

    const getURL = (url: string | File) => {
        if (typeof url === 'string') {
            return url;
        } else {
            return URL.createObjectURL(url);
        }
    };

    const upload = async (file: File) => {
        console.log('file :>> ', file);
        setProfilePicture(file);
        const formData = new FormData();
        formData.append('profilePicture', file);

        try {
            const response = await doRequest('post', URLUpload, formData, true);
            console.log('response :>> ', response);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // getProfilePicture();
    }, []);

    return (
        <div className="d-flex flex-row">
            <div>
                <div>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        style={{ display: 'none' }}
                        onChange={async (e) => {
                            if (e.target.files) {
                                await upload(e.target.files[0]);
                            }
                        }}
                    />
                    <label htmlFor="profilePicture" className="profilePicture">
                        {profilePicture ? (
                            <img src={getURL(profilePicture)} alt="profile" className="profilePicture" />
                        ) : (
                            <FontAwesomeIcon icon={faUpload} />
                        )}
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
