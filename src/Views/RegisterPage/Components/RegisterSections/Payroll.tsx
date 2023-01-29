import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";

export default function PayrollInformation() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    updateEmployee({
      ...employee,
      payrollInformation: {
        ...employee.payrollInformation,
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
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Salary type"
            size="lg"
            id="form1"
            type="text"
            value={employee.payrollInformation.salaryType}
            onChange={(e) => {
              updateModel(e, "salaryType");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Tax ID"
            size="lg"
            id="form2"
            type="text"
            value={employee.payrollInformation.taxID}
            onChange={(e) => {
              updateModel(e, "taxID");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Social security number"
            size="lg"
            id="form4"
            type="text"
            value={employee.payrollInformation.socialSecurityNumber}
            onChange={(e) => {
              updateModel(e, "socialSecurityNumber");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Wage tax class"
            size="lg"
            id="form4"
            type="text"
            value={employee.payrollInformation.wageTaxClass}
            onChange={(e) => {
              updateModel(e, "wageTaxClass");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Children"
            size="lg"
            id="form3"
            type="number"
            value={employee.payrollInformation.children}
            onChange={(e) => {
              updateModel(e, "children");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Child allowance"
            size="lg"
            id="form5"
            type="number"
            value={employee.payrollInformation.childAllowance}
            onChange={(e) => {
              updateModel(e, "childAllowance");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Mariral status"
            size="lg"
            id="form3"
            type="text"
            value={employee.payrollInformation.maritalStatus}
            onChange={(e) => {
              updateModel(e, "maritalStatus");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Religious denomination"
            size="lg"
            id="form5"
            type="text"
            value={employee.payrollInformation.religiousDenomination}
            onChange={(e) => {
              updateModel(e, "religiousDenomination");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Type of health insurrance"
            size="lg"
            id="form3"
            type="text"
            value={employee.payrollInformation.typeOfHealthInsurance}
            onChange={(e) => {
              updateModel(e, "typeOfHealthInsurance");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Name of health insurrance"
            size="lg"
            id="form5"
            type="text"
            value={employee.payrollInformation.nameOfHealthInsurance}
            onChange={(e) => {
              updateModel(e, "nameOfHealthInsurance");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Main or secondary occupation"
            size="lg"
            id="form3"
            type="text"
            value={employee.payrollInformation.mainOrSecondaryOccupation}
            onChange={(e) => {
              updateModel(e, "mainOrSecondaryOccupation");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Wage tax allowance"
            size="lg"
            id="form5"
            type="text"
            value={employee.payrollInformation.wagetaxAllowance}
            onChange={(e) => {
              updateModel(e, "wagetaxAllowance");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
