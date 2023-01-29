import { MDBRow, MDBCol, MDBInput, MDBRadio } from "mdb-react-ui-kit";
import { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

export default function PublicProfile() {
  const { employee, updateEmployee } = useContext(EmployeeContext);

  const updateModel = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    updateEmployee({
      ...employee,
      public: {
        ...employee.public,
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
            label="First Name"
            required
            size="lg"
            id="form1"
            type="text"
            value={employee.public.firstName}
            onChange={(e) => {
              updateModel(e, "firstName");
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
            value={employee.public.lastName}
            onChange={(e) => {
              updateModel(e, "lastName");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6" className="mb-4">
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio
            name="inlineRadio"
            id="inlineRadio1"
            value="option1"
            label="Female"
            inline
          />
          <MDBRadio
            name="inlineRadio"
            id="inlineRadio2"
            value="option2"
            label="Male"
            inline
          />
          <MDBRadio
            name="inlineRadio"
            id="inlineRadio3"
            value="option3"
            label="Other"
            inline
          />
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
              updateModel(e, "email");
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
            value={employee.public.companyPhoneNumb}
            onChange={(e) => {
              updateModel(e, "companyPhoneNumb");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Office"
            size="lg"
            id="form5"
            type="rel"
            value={employee.public.office}
            onChange={(e) => {
              updateModel(e, "office");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Department"
            size="lg"
            id="form3"
            type="text"
            value={employee.public.department}
            onChange={(e) => {
              updateModel(e, "department");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Position"
            size="lg"
            id="form5"
            type="rel"
            value={employee.public.position}
            onChange={(e) => {
              updateModel(e, "position");
            }}
          />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Team"
            size="lg"
            id="form3"
            type="text"
            value={employee.public.team}
            onChange={(e) => {
              updateModel(e, "team");
            }}
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="LinkedIn"
            size="lg"
            id="form5"
            type="rel"
            value={employee.public.linkedIn}
            onChange={(e) => {
              updateModel(e, "linkedIn");
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
              updateModel(e, "birthday");
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
            value={employee.public.phoneNumber}
            onChange={(e) => {
              updateModel(e, "phoneNumber");
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
