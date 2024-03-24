import React from 'react';

import DashboardNavigation from './DashboardNavigation';
import DashboardHeaderInfo from './DashBoardHeaderInfo';

interface Props {
    userData: object;
}

export default function DashboardHeader({ userData }: Props) {
    // password = 57566
    // Joe Rahme

    // password = 39120
    // Guillaume Clere

    // password = 62366
    //Michel Oussa

    return (
        <div className="d-flex flex-column h-100">
            <DashboardHeaderInfo userData={userData} />

            <div className="col-12 h-25" style={{ border: '1px solid black' }}>
                <DashboardNavigation />
            </div>
        </div>
    );
}
