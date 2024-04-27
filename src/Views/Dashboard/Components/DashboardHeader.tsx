import React from 'react';

import DashboardNavigation from './DashboardNavigation';
import DashboardHeaderInfo from './DashBoardHeaderInfo';
import { EmployeeProfileType } from '../../../types';

export default function DashboardHeader(userData: EmployeeProfileType) {
    return (
        <div className="d-flex flex-column h-100 p-3">
            <DashboardHeaderInfo {...userData} />

            <div className="col-12 h-25" style={{ borderBottom: 'none' }}>
                <DashboardNavigation />
            </div>
        </div>
    );
}
