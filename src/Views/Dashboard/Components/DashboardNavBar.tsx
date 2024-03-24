import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faHouse, faMagnifyingGlass, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default function DashboardNavbar() {
    const sections = ['Home', 'Search', 'Inbox', 'Employees', 'Calendar'];
    const icons = [faHouse, faMagnifyingGlass, faEnvelope, faUserFriends, faCalendar];

    return (
        <ul
            className=" w-100 h-100  d-flex flex-row flex-md-column"
            style={{ listStyle: 'none', border: '1px solid black' }}
        >
            {sections.map((section, index) => (
                <li className="mb-2">
                    <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={icons[index]} />
                        <span className="m-2">{section}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
