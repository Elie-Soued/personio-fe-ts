import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../EmployeeContext';

export default function EmergencyContact() {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        updateEmployee({
            ...employee,
            emergencyContact: {
                ...employee.emergencyContact,
                [property]: e.target.value,
            },
        });
    };

    return (
        <div
            className="flex-column d-flex justify-content-between w-100"
            style={{
                height: '80%',
            }}
        >
            <MDBRow>
                <MDBCol md="8">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Name"
                        size="lg"
                        id="form1"
                        type="text"
                        value={employee.emergencyContact.emergency_name}
                        onChange={(e) => {
                            updateModel(e, 'emergency_name');
                        }}
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="8">
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        size="lg"
                        id="form1"
                        type="text"
                        value={employee.emergencyContact.emergency_number}
                        onChange={(e) => {
                            updateModel(e, 'emergency_number');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
