import { MDBRow, MDBCol, MDBInput, MDBRadio } from "mdb-react-ui-kit";

export const PersonalData = () => (
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
          label="Street and house number"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Postal code"
          size="lg"
          id="form4"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="City"
          size="lg"
          id="form5"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Private email"
          size="lg"
          id="form5"
          type="email"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Private Phone"
          size="lg"
          id="form5"
          type="text"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
