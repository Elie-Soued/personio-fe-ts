import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function HrInformation() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    updateEmployee({
      ...employee,
      hrInformation: {
        ...employee.hrInformation,
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
            label="Status"
            size="lg"
            id="form1"
            type="text"
            value={employee.hrInformation.status}
            onChange={(e) => {
              updateModel(e, "status");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Employment Type"
            size="lg"
            id="form2"
            type="text"
            value={employee.hrInformation.employmentType}
            onChange={(e) => {
              updateModel(e, "employmentType");
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
            value={employee.hrInformation.occupationType}
            onChange={(e) => {
              updateModel(e, "occupationType");
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
              updateModel(e, "supervisor");
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
            value={employee.hrInformation.hireDate}
            onChange={(e) => {
              updateModel(e, "hireDate");
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
            value={employee.hrInformation.contractEnd}
            onChange={(e) => {
              updateModel(e, "contractEnd");
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
            value={employee.hrInformation.lengthOfProbation}
            onChange={(e) => {
              updateModel(e, "lengthOfProbation");
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
            value={employee.hrInformation.noticePeriod}
            onChange={(e) => {
              updateModel(e, "noticePeriod");
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
            value={employee.hrInformation.weeklyHours}
            onChange={(e) => {
              updateModel(e, "weeklyHours");
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
            value={employee.hrInformation.costCenter}
            onChange={(e) => {
              updateModel(e, "costCenter");
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
              updateModel(e, "nationality");
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
            value={employee.hrInformation.residentPermitValidUntil}
            onChange={(e) => {
              updateModel(e, "residentPermitValidUntil");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
