import { MDBRow, MDBCol, MDBInput, MDBRadio, MDBBtn } from "mdb-react-ui-kit";

export const PublicProfile = () => (
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Last Name"
          size="lg"
          id="form2"
          type="text"
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Office"
          size="lg"
          id="form5"
          type="rel"
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Position"
          size="lg"
          id="form5"
          type="rel"
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="LinkedIn"
          size="lg"
          id="form5"
          type="rel"
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Phone Number"
          size="lg"
          id="form5"
          type="rel"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
