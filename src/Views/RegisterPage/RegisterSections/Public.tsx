import { MDBRow, MDBCol, MDBInput, MDBRadio, MDBBtn } from "mdb-react-ui-kit";
import { useState, useContext } from "react";

import { EmployeeContext } from "../RegisterPage";

export default function PublicProfile() {
  const context = useContext(EmployeeContext);

  console.log("context.public :>> ", context.public);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [companyNumb, setCompanyNumb] = useState("");
  const [office, setOffice] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");

  const changeFirstName = (e: any) => {
    setFirstName(() => e.target.value);
    context.public.firstName = e.target.value;
  };

  const changeLastName = (e: any) => {
    setLastName(() => e.target.value);
    context.public.lastName = e.target.value;
  };

  return (
    <div
      className="flex-column d-flex justify-content-between w-100"
      style={{
        height: "80%",
      }}
    >
      <MDBRow style={{}}>
        <MDBCol md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="First Name"
            required
            size="lg"
            id="form1"
            type="text"
            value={firstName}
            onChange={(e) => {
              changeFirstName(e);
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
            value={lastName}
            onChange={(e) => {
              changeLastName(e);
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
            value={email}
            onChange={(e) => {
              setEmail(() => e.target.value);
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
            value={companyNumb}
            onChange={(e) => {
              setCompanyNumb(() => e.target.value);
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
            value={office}
            onChange={(e) => {
              setOffice(() => e.target.value);
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
            value={department}
            onChange={(e) => {
              setDepartment(() => e.target.value);
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
            value={position}
            onChange={(e) => {
              setPosition(() => e.target.value);
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
            value={team}
            onChange={(e) => {
              setTeam(() => e.target.value);
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
            value={linkedIn}
            onChange={(e) => {
              setLinkedIn(() => e.target.value);
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
            value={birthday}
            onChange={(e) => {
              setBirthday(() => e.target.value);
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
            value={phone}
            onChange={(e) => {
              setPhone(() => e.target.value);
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
