import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { ChangeEvent, useContext } from 'react';
import { team, department, office, positions, EmployeeContext } from '../../../../../constants';

export default function PublicProfile({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, property: string) => {
        updateEmployee({
            ...employee,
            public: {
                ...employee.public,
                [property]: e?.target?.value,
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
                                <b>First Name</b>
                            </label>
                            <span>{employee.public.first_name}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Last Name</b>
                            </label>
                            <span>{employee.public.last_name}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Gender</b>
                            </label>
                            <span>{employee.public.gender}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Email</b>
                            </label>
                            <span>{employee.public.email}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Company Phone Number</b>
                            </label>
                            <span>{employee.public.company_phone_number}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Office</b>
                            </label>
                            <span>{employee.public.office}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Department</b>
                            </label>
                            <span>{employee.public.department}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Position</b>
                            </label>
                            <span>{employee.public.position}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Team</b>
                            </label>
                            <span>{employee.public.team}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>LinkedIn</b>
                            </label>
                            <span>{employee.public.linked_in}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Birthday</b>
                            </label>
                            <span>{employee.public.birthday}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>Phone Number</b>
                            </label>
                            <span>{employee.public.phone_number}</span>
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
                        <MDBInput
                            wrapperClass="mb-4"
                            label="First Name"
                            required
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.public.first_name}
                            onChange={(e) => {
                                updateModel(e, 'first_name');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Last Name"
                            size="lg"
                            id="form2"
                            type="text"
                            value={employee.public.last_name}
                            onChange={(e) => {
                                updateModel(e, 'last_name');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6" className="mb-4">
                        <h6 className="fw-bold">Gender: </h6>
                        <div className="d-flex flex-row  justify-content-around">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Male"
                                    name="gender"
                                    id="male"
                                    checked={employee.public.gender === 'Male'}
                                    onChange={(e) => {
                                        updateModel(e, 'gender');
                                    }}
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Female"
                                    name="gender"
                                    id="female"
                                    checked={employee.public.gender === 'Female'}
                                    onChange={(e) => {
                                        updateModel(e, 'gender');
                                    }}
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Other"
                                    name="gender"
                                    id="Other"
                                    checked={employee.public.gender === 'Other'}
                                    onChange={(e) => {
                                        updateModel(e, 'gender');
                                    }}
                                />
                                <label className="form-check-label" htmlFor="other">
                                    Other
                                </label>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Email"
                            size="lg"
                            id="form4"
                            type="email"
                            value={employee.public.email}
                            onChange={(e) => {
                                updateModel(e, 'email');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Company Phone Number"
                            size="lg"
                            id="form3"
                            type="text"
                            value={employee.public.company_phone_number}
                            onChange={(e) => {
                                updateModel(e, 'company_phone_number');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={employee.public.office}
                            onChange={(e) => {
                                updateModel(e, 'office');
                            }}
                            style={{
                                height: '48px',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option selected>Office</option>

                            {office.map((o, index) => (
                                <option value={o} key={index}>
                                    {o}
                                </option>
                            ))}
                        </select>
                    </MDBCol>
                </MDBRow>

                <MDBRow style={{ minHeight: '80px' }}>
                    <MDBCol md="6">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={employee.public.department}
                            onChange={(e) => {
                                updateModel(e, 'department');
                            }}
                            style={{
                                height: '48px',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option selected>Department</option>

                            {department.map((d) => (
                                <option value={d}>{d}</option>
                            ))}
                        </select>
                    </MDBCol>

                    <MDBCol md="6">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={employee.public.position}
                            onChange={(e) => {
                                updateModel(e, 'position');
                            }}
                            style={{
                                height: '48px',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option selected>Position</option>

                            {positions.map((d) => (
                                <option value={d}>{d}</option>
                            ))}
                        </select>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={employee.public.team}
                            onChange={(e) => {
                                updateModel(e, 'team');
                            }}
                            style={{
                                height: '48px',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option selected>Team</option>

                            {team.map((t) => (
                                <option value={t}>{t}</option>
                            ))}
                        </select>
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Linked_in"
                            size="lg"
                            id="form5"
                            type="rel"
                            value={employee.public.linked_in}
                            onChange={(e) => {
                                updateModel(e, 'linked_in');
                            }}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Birthday"
                            size="lg"
                            id="form3"
                            type="date"
                            value={employee.public.birthday}
                            onChange={(e) => {
                                updateModel(e, 'birthday');
                            }}
                        />
                    </MDBCol>

                    <MDBCol md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Phone Number"
                            size="lg"
                            id="form5"
                            type="rel"
                            value={employee.public.phone_number}
                            onChange={(e) => {
                                updateModel(e, 'phone_number');
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
