import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";

export default function BankDetails() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
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
        height: "80%",
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
            value={employee.bankDetails.holderOfBankAccount}
            onChange={(e) => {
              updateModel(e, "holderOfBankAccount");
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
              updateModel(e, "iban");
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
              updateModel(e, "bic");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
