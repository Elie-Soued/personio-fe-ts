import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { ChangeEvent, useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function HrInformation({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, property: string) => {
        updateEmployee({
            ...employee,
            hrInformation: {
                ...employee.hrInformation,
                [property]: e.target.value,
            },
        });
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
                                <b>Status</b>
                            </label>
                            <span>{employee.hrInformation.status}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Employment Type</b>
                            </label>
                            <span>{employee.hrInformation.employment_type}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Occupation Type</b>
                            </label>
                            <span>{employee.hrInformation.occupation_type}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Supervisor</b>
                            </label>
                            <span>{employee.hrInformation.supervisor}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Hire Date</b>
                            </label>
                            <span>{employee.hrInformation.hire_date}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Contract ends</b>
                            </label>
                            <span>{employee.hrInformation.contract_end}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Length of probation</b>
                            </label>
                            <span>{employee.hrInformation.length_of_probation}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Notice Period</b>
                            </label>
                            <span>{employee.hrInformation.notice_period}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Weekly Hours </b>
                            </label>
                            <span>{employee.hrInformation.weekly_hours}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Cost center </b>
                            </label>
                            <span>{employee.hrInformation.cost_center}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Nationality</b>
                            </label>
                            <span>{employee.hrInformation.nationality}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Residence permit valid until</b>
                            </label>
                            <span>{employee.hrInformation.resident_permit_valid_until}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    };

    const renderEditMode = () => {
        return (
            <div
                className="flex-column d-flex justify-content-between w-100"
                style={{
                    height: '80%',
                }}
            >
                <MDBRow>
                    <MDBCol md="6">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={employee.hrInformation.status}
                            onChange={(e) => {
                                updateModel(e, 'status');
                            }}
                            style={{
                                height: '48px',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option selected>Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Employment Type"
                            size="lg"
                            id="form2"
                            type="text"
                            value={employee.hrInformation.employment_type}
                            onChange={(e) => {
                                updateModel(e, 'employment_type');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Occupation Type "
                            size="lg"
                            id="form4"
                            type="text"
                            value={employee.hrInformation.occupation_type}
                            onChange={(e) => {
                                updateModel(e, 'occupation_type');
                            }}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Supervisor"
                            size="lg"
                            id="form4"
                            type="text"
                            value={employee.hrInformation.supervisor}
                            onChange={(e) => {
                                updateModel(e, 'supervisor');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Hire date"
                            size="lg"
                            id="form3"
                            type="date"
                            value={employee.hrInformation.hire_date}
                            onChange={(e) => {
                                updateModel(e, 'hire_date');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Contract ends"
                            size="lg"
                            id="form5"
                            type="date"
                            value={employee.hrInformation.contract_end}
                            onChange={(e) => {
                                updateModel(e, 'contract_end');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Length of probation"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.hrInformation.length_of_probation}
                            onChange={(e) => {
                                updateModel(e, 'length_of_probation');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Notice period"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.hrInformation.notice_period}
                            onChange={(e) => {
                                updateModel(e, 'notice_period');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Weekly Hours"
                            size="lg"
                            id="form3"
                            type="number"
                            value={employee.hrInformation.weekly_hours}
                            onChange={(e) => {
                                updateModel(e, 'weekly_hours');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Cost center"
                            size="lg"
                            id="form5"
                            type="text"
                            value={employee.hrInformation.cost_center}
                            onChange={(e) => {
                                updateModel(e, 'cost_center');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Nationality"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.hrInformation.nationality}
                            onChange={(e) => {
                                updateModel(e, 'nationality');
                            }}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Residence permit valid until"
                            size="lg"
                            id="form3"
                            type="date"
                            value={employee.hrInformation.resident_permit_valid_until}
                            onChange={(e) => {
                                updateModel(e, 'resident_permit_valid_until');
                            }}
                        />
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
