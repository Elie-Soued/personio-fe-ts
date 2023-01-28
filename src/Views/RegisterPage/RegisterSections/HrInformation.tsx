import { MDBRow, MDBCol, MDBInput, MDBRadio } from "mdb-react-ui-kit";

export const HrInformation = () => (
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Employment Type"
          size="lg"
          id="form2"
          type="text"
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
        />
      </MDBCol>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Supervisor"
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
          label="Hire date"
          size="lg"
          id="form3"
          type="date"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Contract ends"
          size="lg"
          id="form5"
          type="date"
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
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Notice period"
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
          label="Weekly Hours"
          size="lg"
          id="form3"
          type="number"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Cost center"
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
          label="Nationality"
          size="lg"
          id="form3"
          type="text"
        />
      </MDBCol>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Residence permit valid until"
          size="lg"
          id="form3"
          type="date"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
