import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { EmployeeContext } from '../../../../../constants';

export default function BankDetails({ readOnly }: { readOnly: boolean }) {
    const { employee, updateEmployee } = useContext(EmployeeContext);

    const updateModel = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        updateEmployee({
            ...employee,
            bankDetails: {
                ...employee.bankDetails,
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
                <MDBRow>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Holder of bank account"
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.bankDetails.holder_of_bank_account}
                            onChange={(e) => {
                                updateModel(e, 'holder_of_bank_account');
                            }}
                        />
                    </MDBCol>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="IBAN"
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.bankDetails.iban}
                            onChange={(e) => {
                                updateModel(e, 'iban');
                            }}
                        />
                    </MDBCol>
                    <MDBCol md="8">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="BIC"
                            size="lg"
                            id="form1"
                            type="text"
                            value={employee.bankDetails.bic}
                            onChange={(e) => {
                                updateModel(e, 'bic');
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
                                <b>Holder of bank account</b>
                            </label>
                            <span>{employee.bankDetails.holder_of_bank_account}</span>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>IBAN</b>
                            </label>
                            <span>{employee.bankDetails.iban}</span>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="8">
                        <div className="d-flex flex-row justify-content-between">
                            <label>
                                <b>BIC</b>
                            </label>
                            <span>{employee.bankDetails.bic}</span>
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
