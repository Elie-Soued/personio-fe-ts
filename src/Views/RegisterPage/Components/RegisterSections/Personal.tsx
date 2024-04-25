import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../Constants/Constants';

interface IPublicProfileProps {
    readOnly: boolean;
}

export default function PersonalData({ readOnly }: IPublicProfileProps) {
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
                        disabled={readOnly}
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
                        disabled={readOnly}
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
                        disabled={readOnly}
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
                        disabled={readOnly}
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
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'private_phone');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
