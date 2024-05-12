import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function PersonalData({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        updateEmployee({
            ...employee,
            personalData: {
                ...employee.personalData,
                [property]: e.target.value,
            },
        });
    };

    const renderEditMode = () => {
        return (
            <div
                className="flex-column d-flex justify-content-between w-100"
                style={{
                    height: '80%',
                }}
            >
                <MDBRow style={{}}>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Street and house number"
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.personalData.street_and_house_number}
                            onChange={(e) => {
                                updateModel(e, 'street_and_house_number');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Postal code"
                            size="lg"
                            id="form4"
                            type="text"
                            value={employee.personalData.postal_code}
                            onChange={(e) => {
                                updateModel(e, 'postal_code');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="City"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.personalData.city}
                            onChange={(e) => {
                                updateModel(e, 'city');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Private email"
                            size="lg"
                            id="form5"
                            type="email"
                            value={employee.personalData.private_email}
                            onChange={(e) => {
                                updateModel(e, 'private_email');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Private Phone"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.personalData.private_phone}
                            onChange={(e) => {
                                updateModel(e, 'private_phone');
                            }}
                        />
                    </MDBCol>
                </MDBRow>
            </div>
        );
    };

    const renderReadMode = () => {
        return (
            <div
                className="flex-column d-flex justify-content-between w-100"
                style={{
                    height: '80%',
                }}
            >
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Street and house number</b>
                            </label>
                            <span>{employee.personalData.street_and_house_number}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Postal Code</b>
                            </label>
                            <span>{employee.personalData.postal_code}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>City</b>
                            </label>
                            <span>{employee.personalData.city}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Private email</b>
                            </label>
                            <span>{employee.personalData.private_email}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Private Phone</b>
                            </label>
                            <span>{employee.personalData.private_phone}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    };

    const renderComponent = () => {
        if (readOnly) return renderReadMode();
        return renderEditMode();
    };

    return renderComponent();
}
