import { createContext, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import PublicProfile from './subcomponents/Public';
import HrInformation from './subcomponents/HrInformation';
import PersonalData from './subcomponents/Personal';
import PayrollInformation from './subcomponents/Payroll';
import BankDetails from './subcomponents/Bank';
import EmergencyContact from './subcomponents/Emergency';
import EmployeeEquipment from './subcomponents/Employee';
import Development from './subcomponents/Development';
import { EmployeeProfileType, EmployeeProfileContextType, PersonalInfoType } from '../../../../types';

export default function PersonalInfoSection({ name, showTitle, context, readOnly }: PersonalInfoType) {
    const EmployeeContext = createContext<EmployeeProfileContextType>({
        employee: context,
        updateEmployee: () => {},
    });

    const { employee } = useContext(EmployeeContext);

    return (
        <MDBContainer
            fluid
            style={{
                backgroundColor: '#eee',
                height: '100%',
            }}
        >
            <MDBRow
                className="justify-content-center align-items-center "
                style={{
                    height: '100%',
                }}
            >
                <MDBCard
                    className="col-lg-12 p-4"
                    style={{
                        height: '100%',
                        minHeight: '805px',
                    }}
                >
                    {showTitle ? <h3 className="fw-bold text-center mb-4 pb-2 pb-md-0 mb-md-5 p-3">{name}</h3> : ''}

                    <div
                        className="flex-column d-flex justify-content-between w-100"
                        style={{
                            height: '80%',
                        }}
                    >
                        {renderPersonalInfoSection(name, employee, readOnly)}
                    </div>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

const renderPersonalInfoSection = (section: string, employeeContextValues: EmployeeProfileType, readOnly: boolean) => {
    switch (section) {
        case 'Public Profile':
            return <PublicProfile readOnly={readOnly} />;

        case 'Hr Information':
            return <HrInformation readOnly={readOnly} />;

        case 'Personal Data':
            return <PersonalData readOnly={readOnly} />;

        case 'Payroll Information':
            return <PayrollInformation readOnly={readOnly} />;

        case 'Bank Details':
            return <BankDetails readOnly={readOnly} />;

        case 'Emergency Contact':
            return <EmergencyContact readOnly={readOnly} />;

        case 'Employee Equipment':
            return <EmployeeEquipment readOnly={readOnly} />;

        case 'Development':
            return <Development readOnly={readOnly} />;
        default:
            return undefined;
    }
};
