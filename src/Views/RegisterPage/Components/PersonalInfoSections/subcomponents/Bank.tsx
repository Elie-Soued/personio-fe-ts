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
                        disabled={readOnly}
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
                        disabled={readOnly}
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
                        disabled={readOnly}
                        onChange={(e) => {
                            updateModel(e, 'bic');
                        }}
                    />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
