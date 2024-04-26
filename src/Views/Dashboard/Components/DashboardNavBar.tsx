import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faEnvelope,
    faHouse,
    faMagnifyingGlass,
    faUserFriends,
    faArrowLeftRotate,
} from '@fortawesome/free-solid-svg-icons';

export default function DashboardNavbar() {
    const sections = ['Home', 'Search', 'Inbox', 'Employees', 'Calendar', 'Logout'];
    const icons = [faHouse, faMagnifyingGlass, faEnvelope, faUserFriends, faCalendar, faArrowLeftRotate];

    return (
        <ul className=" w-100 h-100  d-flex flex-row flex-md-column p-3" style={{ listStyle: 'none' }}>
            {sections.map((section, index) => (
                <li
                    className="mb-2"
                    onClick={() => {
                        if (section === 'Logout') {
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        }
                    }}
                >
                    <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={icons[index]} />
                        <span className="m-2">{section}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
