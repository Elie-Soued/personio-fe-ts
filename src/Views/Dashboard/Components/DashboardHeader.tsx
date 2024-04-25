import React from 'react';

import DashboardNavigation from './DashboardNavigation';
import DashboardHeaderInfo from './DashBoardHeaderInfo';
import { EmployeeProfileInterface } from '../../../Constants/Constants';

interface Props {
    userData: EmployeeProfileInterface;
}

export default function DashboardHeader({ userData }: Props) {
    return (
        <div className="d-flex flex-column h-100">
            <DashboardHeaderInfo userData={userData} />

            <div className="col-12 h-25" style={{ borderBottom: 'none' }}>
                <DashboardNavigation />
            </div>
        </div>
    );
}
